class Api::ApiController < ApplicationController
  before_action :require_signed_in
  #need to check board's membership later
  def require_board_member!
    redirect_to new_session_url unless current_board.is_member?(current_user)
  end
end


