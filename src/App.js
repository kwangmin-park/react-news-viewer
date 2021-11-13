import './App.css';
import axios from "axios";
import React, {useState} from "react";

function App() {
    const [data, setData] = useState(null);
    const onClick = async () => {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=1ea0620b6014469dbafcbd8f58fa02ea");
            setData(response.data);
        try {
        } catch(e){
            console.log(e);
        }
    }
    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
        </div>
    );
}

export default App;
