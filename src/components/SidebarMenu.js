// SidebarMenu is used to display the task and its status 
const SidebarMenu = ({ setCategory, todos }) => {
    return (
      <div className="sidebar-menu">
        <div className="card-container" onClick={() => setCategory("today")}>
          <span className="card-title">📅 Today</span>  
               {/*It shows today and the task for today  */}
          <span className="card-count">{todos.filter(t => new Date(t.dueDate).toDateString() === new Date().toDateString()).length}</span>
          {/* filters out the task where due date matches the date it is today */}
        </div>
        <div className="card-container" onClick={() => setCategory("scheduled")}>
          <span className="card-title">⏳ Scheduled</span>
          {/* it shows scheduled and filters and schedules tasks in the future */}
          <span className="card-count">{todos.filter(t => new Date(t.dueDate) > new Date()).length}</span>
        </div>
        <div className="card-container" onClick={() => setCategory("all")}>
          <span className="card-title">📋 All</span>
          <span className="card-count">{todos.length}</span>
          {/* it shows all the tasks along with total no of tasks with their dueDates */}
        </div>
        <div className="card-container" onClick={() => setCategory("flagged")}>
          <span className="card-title">🚩 Flagged</span>
          <span className="card-count">{todos.filter(t => t.pinned).length}</span>
          {/* flagged is used to show that the task is important and filters the tasks that have flagged  */}
        </div>
        <div className="card-container" onClick={() => setCategory("completed")}>
          <span className="card-title">✅ Completed</span>
          <span className="card-count">{todos.filter(t => t.completed).length}</span>
          {/* it filters the tasks that have completed */}
        </div>
      </div>
    );
  };
  
  export default SidebarMenu;
  