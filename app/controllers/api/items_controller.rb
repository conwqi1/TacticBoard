class Api::ItemsController < Api::ApiController
   def create
     @items = current_checklist.card.new(item_params)
     if @items.save
       render json: @items
     else
       render json: @items.errors.full_messages, status: :unprocessable_entity
     end
   end
   
   def update
     @item = Item.find(params[:id])

     if @item.update(item_params)
       render json: @item
     else
       render json: @item.errors.full_messages, status: :unprocessable_entity
     end
   end
   
   def show
     @item = Item.find(params[:id])
     render :show
   end

   def destroy
     @item = Item.find(params[:id])
     @item.destroy
     render json: { message: 'destroyed!' }
   end

   private
   def current_checklist
     if params[:id]
       @item = Item.find(params[:id])
       @checklist = @item.checklist
     elsif params[:item]
       @checklist = checklist.find(params[:item][:checklist_id])
     end
   end
   
   def current_card
     current_list.card
   end
   
   def current_list
     current_card.list
   end

   def current_board
     current_list.board
   end
   def item_params
     params.require(:item).permit(:done, :title, :checklist_id)
   end
end