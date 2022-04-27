class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  def index
    render json: User.all
  end

  def show
    user = User.find(params[:id])
    render json: user, serializer: UserWithPostsSerializer
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!
      render json: {
               status: :created,
               user: @user,
             }
    else
      render json: {
               status: 500,
               errors: @user.errors.full_messages,
             }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end

  def render_not_found_response
    render json: { error: "User not found" }, status: :not_found
  end
end
