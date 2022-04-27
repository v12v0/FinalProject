class PostsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    render json: Post.all
  end

  def show
  post = Post.find(params[:id])
  render json: post
  end
  
  def create
    post = Post.create!(post_params)
    render json: post, status: :created
  end


  private
  def post_params
      params.require(:post).permit(:message, :user_id)
  end

  def render_not_found_response
    render json: { error: "Post not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end



end
