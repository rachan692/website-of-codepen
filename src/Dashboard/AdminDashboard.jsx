import Header from '../Components/Header';
import CreateTask from '../Components/CreateTask';
import AllTask from '../Components/AllTask';

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-5 sm:p-7'>
      {/* Header */}
      <Header />

      {/* Create Task Section */}
      <div className="mt-7 sm:mt-10">
        <CreateTask />
      </div>

      {/* All Task Section */}
      <div className="mt-7 sm:mt-10">
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
