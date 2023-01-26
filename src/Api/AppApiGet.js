import React, { useEffect, useState } from "react";

const AppApiGet = () => {
    const [data, setData] = useState([]); 
    const [error, setError] = useState(null); 
    useEffect(() => {
        function fetchData() {
            fetch("https://hn.algolia.com/api/v1/search?query=redux")
                .then(res => res.json())
                .then(res => setData(res.hits))
                .catch(error => setError(error)); 
        }

        fetchData();
    }, []);

    return (
        <div>
            <hr></hr>
            <ul>
                {data.map(course => (
                    <li>
                        <a href={course.url}> {course.title}</a>
                    </li>
                ))}
            </ul>
            <hr></hr>
        </div>
    );
};
export default AppApiGet;