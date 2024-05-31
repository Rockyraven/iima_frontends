/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        id: 1, name: "Dianne Russell", company: "Starbucks", comment: "The event was exceptionally well-organized, with a clear itinerary and seamless execution. The attention to detail was evident, ensuring everything ran smoothly and on time.", photo: "/src/assets/Avatar1.png"
    },
    {
        id: 2, name: "Kristin Watson", company: "Louis Vuitton", comment: "The venue was perfect, offering a blend of comfort and nostalgia. It was spacious, easily accessible, and beautifully decorated, creating a welcoming atmosphere for all attendees.", photo: "/src/assets/Avatar2.png"
    },
    {
        id: 3, name: "Kathryn Murphy", company: "McDonald's", comment: "The activities were thoughtfully planned and highly engaging. From icebreakers to group games, they provided ample opportunities for interaction, helping to rekindle old friendships and form new connections.", photo: "/src/assets/Avatar3.png"
    },
    {
        id: 4, name: "Dianne Russell", company: "Starbucks", comment: "The schedule was well-balanced, providing a mix of formal presentations and casual social events. It allowed for both structured engagement and free time to explore and catch up.", photo: "/src/assets/Avatar1.png"
    },
    {
        id: 5, name: "Kristin Watson", company: "Louis Vuitton", comment: "Communication before the event was clear and timely. Regular updates kept everyone informed about the reunion details, making planning and attendance straightforward and stress-free.", photo: "/src/assets/Avatar2.png"
    },
    {
        id: 6, name: "Kathryn Murphy", company: "McDonald's", comment: "The entertainment was a highlight of the reunion. From live music to engaging performances, it added a fun and lively element to the event, keeping everyone entertained.", photo: "/src/assets/Avatar3.png"
    },
]

const ReviewCard = () => {
    return (
        <>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper -z-0"
      >
        {
            reviews.map(review => <SwiperSlide key={review.id} className='border border-[#006B6A] p-8 rounded'>
                    <div>
                        <img src="/src/assets/starts.png" alt=""  className='h-4'/>
                        <p className='my-5'>" {review.comment}</p>
                        <div className='flex gap-4 items-center'>
                            <img src={review.photo} alt="" className='h-10' />
                            <div>
                                <p>{review.name}</p>
                                <p className='text-sm'>{review.company}</p>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>)
        }
      </Swiper>
        </>
    );
};

export default ReviewCard;