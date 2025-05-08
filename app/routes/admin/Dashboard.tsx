import { Header } from "components";
import StatsCard from "components/StatsCard";
import TripCard from "components/TripCard";
const allTrips = [
   {
      id: 1,
      name: "Tropical Rewind",
      imageUrls: ["/assets/images/sample1.jpg"],
      itinerary: { location: "Thailand" },
      tags: ["Adventure", "Culture"],
      travelStyle: "Solo",
      estimatedPrice: "$1,000",
   },
   {
      id: 2,
      name: "French Reverie",
      imageUrls: ["/assets/images/sample2.jpg"],
      itinerary: { location: "Paris" },
      tags: ["Relaxation", "Culinary"],
      travelStyle: "Family",
      estimatedPrice: "$2,000",
   },
   {
      id: 3,
      name: "Zen Break",
      imageUrls: ["/assets/images/sample3.jpg"],
      itinerary: { location: "Japan" },
      tags: ["Shopping", "Luxury"],
      travelStyle: "Couple",
      estimatedPrice: "$3,000",
   },
   {
      id: 4,
      name: "Adventure in Westeros",
      imageUrls: ["/assets/images/sample4.jpg"],
      itinerary: { location: "Croatia" },
      tags: ["Historical", "Culture"],
      travelStyle: "Friends",
      estimatedPrice: "$4,000",
   },
];

function dashboard() {
   const dashboardStats = {
      totalUsers: 35122,
      usersJoined: { currentMonth: 341, lastMonth: 214 },
      totalTrips: 3411,
      tripsCreated: { currentMonth: 150, lastMonth: 200 },
      usersActive: { total: 62, currentMonth: 5, lastMonth: 15 },
   };
   const { totalUsers, usersActive, usersJoined, totalTrips, tripsCreated } =
      dashboardStats;
   return (
      <main className="dashboard wrapper">
         <Header
            title="Welcome, Adrian"
            description="Track activity, trends and popular destinations at real time"></Header>

         <section className="flex gap-6 flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
               <StatsCard
                  headerTitle="Total Users"
                  total={totalUsers}
                  currentMonthCount={usersJoined.currentMonth}
                  lastMonthCount={usersJoined.lastMonth}
               />
               <StatsCard
                  headerTitle="Total Trips"
                  total={totalTrips}
                  currentMonthCount={tripsCreated.currentMonth}
                  lastMonthCount={tripsCreated.lastMonth}
               />
               <StatsCard
                  headerTitle="Active Users Today"
                  total={usersActive.total}
                  currentMonthCount={usersActive.currentMonth}
                  lastMonthCount={usersActive.lastMonth}
               />
            </div>
         </section>
         <section className="container">
            <h1 className="text-xl font-semibold text-dark-100">Trips</h1>
            <div className="trip-grid">
               {allTrips.map((trip) => (
                  <TripCard trip={trip} key={trip.id}></TripCard>
               ))}
            </div>
         </section>
      </main>
   );
}

export default dashboard;
