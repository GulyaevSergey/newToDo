export function StatusBar(props) {

    const btns = [
        {status: "all", name: "Все"},
        {status: "active", name: "Активные"},
        {status: "done", name: "Выполненные"},
    ]

    const renderBtns = btns.map((btn)=>{

        const cssClass = props.status === btn.status ? "btn-primary" : "btn-light"

        return(
            <button 
            key={btn.status}
            onClick={()=> props.changeStatus(btn.status)} 
                type="button"
                className={`btn ${cssClass}`}>
			    	{btn.name}
		    </button>)
    })

    return (
        <div className="btn-group" role="group">
			{renderBtns}
		</div>
    );
}