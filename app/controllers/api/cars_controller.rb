class Api::CarsController < ApplicationController

  before_action :require_logged_in, only: [:create, :update, :delete]

  def index
    @cars = Car.all
  end
  
  def show
    @car = Car.find(params[:id])
  end

  def create
    @car = Car.new(car_params)
    @car.owner_id = current_user.id
    if @car.save
      render "api/cars/show"
    else
      render json: @car.errors.full_messages, status: 422
    end
  end

  def update
    @car = Car.find(params[:id])
    if @car.update(car_params)
      render "api/cars/show"
    else
      render json: @car.errors.full_messages, status: 422
    end
  end

  def destroy
    @car = Car.find(params[:id])
    if @car.delete
      render "api/cars/show"
    else
      render json: @car.errors.full_messages, status: 422
    end
  end

  private

  def car_params
    params.require(:car).permit(
      :rate, 
      :make, 
      :model, 
      :year, 
      :color, 
      :transmission, 
      :seats, 
      :description, 
      :plate, 
      :address, 
      :city, 
      :state, 
      :zip, 
      :doors, 
      :lat, 
      :lng, 
      :mpg, 
      :awd, 
      :audio_input, 
      :bike_rack, 
      :bluetooth, 
      :child_seat, 
      :convertible, 
      :gps, 
      :heated_seats, 
      :longterm_car, 
      :pet_friendly, 
      :ski_rack, 
      :snow_tires_chains, 
      :sunroof, 
      :toll_pass, 
      :usb_input,
      photos: [])
  end
end
