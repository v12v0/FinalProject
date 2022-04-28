class UsersController < ApplicationController
<<<<<<< HEAD
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
=======
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
>>>>>>> main
  end

  private

  def user_params
<<<<<<< HEAD
    params.permit(:username, :password, :password_confirmation, :image_url, :bio)
  end

=======
    params.require(:user).permit(:username, :password, :password_confirmation)
  end

  def render_not_found_response
    render json: { error: "User not found" }, status: :not_found
  end
>>>>>>> main
end
