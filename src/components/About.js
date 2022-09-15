import React from "react";
import "./About.css"

function About(){
    return(
        <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>Welcome to BrightGam College</h3>
                    <p>We produce the best</p>
					<div class="button">
						<a href=" ">Read More</a>
					</div>
				</div>
				<div class="social">
					<a href=" "><i class="fab fa-facebook-f"></i></a>
					<a href=" "><i class="fab fa-twitter"></i></a>
					<a href=" "><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img src="https://fastly.4sqi.net/img/general/600x600/349328_pCLWn3CiPJwmZcn34qPhYf7wwLsB7sQHNRnlRUjukQI.jpg" alt="" />
			</div>
		</div>
	</div>
    )
}

export default About;