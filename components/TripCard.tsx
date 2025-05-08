import { Link, useLocation } from "react-router";
import {
   ChipListComponent,
   ChipsDirective,
   ChipDirective,
} from "@syncfusion/ej2-react-buttons";
import { cn, getFirstWord } from "lib/utils";
interface Trip {
   id: number;
   name: string;
   imageUrls: string[];
   itinerary: { location: string };
   tags: string[];
   travelStyle: string;
   estimatedPrice: string;
}
function TripCard({ trip }: { trip: Trip }) {
   const { id, name, imageUrls, itinerary, tags, travelStyle, estimatedPrice } =
      trip;
   const path = useLocation();
   return (
      <Link
         to={
            path.pathname === "/" || path.pathname.startsWith("/travel")
               ? `/travel/${id}`
               : `/trips/${id}`
         }
         className="trip-card">
         <img src={imageUrls[0]} alt={name} />
         <article>
            <h2>{name}</h2>
            <figure>
               <img
                  src="/assets/icons/location-mark.svg"
                  alt="location"
                  className="size-4"
               />
               <figcaption>{itinerary.location}</figcaption>
            </figure>
         </article>
         <div className="mt-5 pl-[18px] pr-3.5 pb-5">
            <ChipListComponent className="travel-chip">
               <ChipsDirective>
                  {tags.map((tag, index) => (
                     <ChipDirective
                        key={index}
                        text={getFirstWord(tag)}
                        cssClass={cn(
                           index === 1
                              ? "!bg-pink !text-pink-500"
                              : "!bg-success-50 !text-success-700"
                        )}></ChipDirective>
                  ))}
               </ChipsDirective>
            </ChipListComponent>
         </div>
         <article className="tripCard-pill">{estimatedPrice}</article>
      </Link>
   );
}

export default TripCard;
