class Api::BoardMembershipsController < Api::ApiController
  def create
    @membership = BoardMembership.new(membership_params)
    if @membership.save
      render json: @membership
    else
      render json: @membership.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def show
    @membership = current_user.board_memberships.find(params[:id])
    render :show
  end
  
  def destroy
    @membership = current_user.board_memberships.find(params[:id])
    @membership.try(:destroy)
    render json: {}
  end
  
  private
  
  def membership_params
    params.require(:board_membership).permit(:user_id, :board_id)
  end
  
end

