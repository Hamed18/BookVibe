
const BookFairCard = ({BookFair}) => {
	const {FairName,Location,Year,Description,Attendance,NextScheduledDate}  = BookFair;
	return (
		<div className="max-w-5xl mx-auto my-12">
		<div className="card lg:card-side bg-base-100 shadow-xl">
		  <div className="card-body">
			<h2 className="card-title text-2xl font-bold">Fair Name: {FairName}</h2>
			<p>Location: {Location}</p> 
			<hr />
			<div className="flex items-start">
			  <span className="mr-4">{Description}</span>
			</div>
			<div className="flex flex-col items-start">
			  <h4 className="mr-2 font-bold">Year: {Year}</h4>
			  <h4 className="mr-2 font-bold">Attendance: {Attendance}</h4>
			</div>
			<hr />
			<div className="flex items-center">
			  <span className="pr-2 font-bold my-2 rounded-xl">
			  Next Scheduled Date: {NextScheduledDate}
			  </span>
			</div>
		  </div>
		</div>
	  </div>

	);
};

export default BookFairCard;