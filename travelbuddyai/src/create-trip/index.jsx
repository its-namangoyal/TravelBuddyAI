import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SetBudgetOptions, SelectTravelsList } from '@/constants/options';
import { Button } from '@/components/ui/button';

function CreateTrip() {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h1 className='font-bold text-3xl text-center'>
        Tell us your travel preferences
      </h1>
      <p className='mt-3 text-gray-500 text-xl text-center'>
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>
      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>
            What is the destination of your choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => { 
                setPlace(v); 
                handleInputChange('location', v);
              },
            }}
          />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>
            How many days are you planning your Trip?
          </h2>
          <Input 
            placeholder='Ex. 3' 
            type='number' 
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>
            What is your Budget?
          </h2>
          <p className='mt-3 text-gray-500 text-xl text-center'>
            The Budget is exclusively allocated for activities and dining purposes.
          </p>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SetBudgetOptions.map((item, index) => (
              <div 
                key={index} 
                onClick={() => handleInputChange('budget', item.title)}
                className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'
              >
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className='mt-3 text-gray-500 text-xl text-center'>
            Who do you plan on travelling with on your adventure?
          </p>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelsList.map((item, index) => (
              <div 
                key={index} 
                onClick={() => handleInputChange('people', item.people)}
                className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'
              >
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className='my-10 flex justify-center'>
          <Button>Generate Trip</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
