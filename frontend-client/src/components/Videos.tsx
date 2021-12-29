import React from "react";
import CourseCard from "./CourseCard";
import "./Videos.css";

import axios from "axios";

export default class Videos extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      videos: [],
    };
  }
  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/courses/`).then((res) => {
      const videos = res.data;
      this.setState({ videos });
      console.log(videos);
    });
  }

  render() {
    return (
      <div className="recommendedVideos">
        {this.state.videos.map((video: any) => (
          <CourseCard
            key={video.key}
            courseTitle={video.title}
            description={video.description}
            imgSrc={video.image}
            videos={video.tutorials.length}
          />
        ))}
      </div>
    );
  }
}
