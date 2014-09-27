class Api::ChecklistsController < Api::ApiController
  # before_action :require_board_member!
   def create
     @checklist = current_card.checklists.new(checklist_params)
     if @checklist.save
       render json: @checklist
     else
       render json: @checklist.errors.full_messages, status: :unprocessable_entity
     end
   end
   
   def destroy
     @checklist = Checklist.find(params[:id])
     @checklist.destroy
     render json: {}
   end

   def update
     @checklist = Checklist.find(params[:id])
     if @checklist.update_attributes(checklist_params)
       render json: @checklist
     else
       render json: @checklist.errors.full_messages,
              status: :unprocessable_entity
     end
   end

   def show
     @checklist = Checklist.find(params[:id])
     render :show
   end

   private
   def current_card
     if params[:id]
       @checklist = Checklist.find(params[:id])
       @card = @checklist.card
     elsif params[:checklist]
       @card = Card.find(params[:checklist][:card_id])
     end
   end
   
   def current_list
     current_card.list
   end

   def current_board
     current_list.board
   end

   def checklist_params
     params.require(:checklist).permit(:title, :card_id, :ord)
   end
end