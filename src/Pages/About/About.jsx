import React from "react";
import CommonSelect from "../../Components/CommonSelect/CommonSelect";

export default function About() {



    const dataset =[
        {
            name:"Blog"
        },
        {
            name:"Blog details"
        }
    ]

  return (
    <div>
      About
      <CommonSelect  dataset={dataset}/>
    </div>
  );
}
