import React from 'react';
import styled from 'styled-components';
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const Container = styled.div`
ul {
    display: block;
    list-style-type:none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.ftco-footer {
  font-size: 16px;
  background: #e0e0e0;
  padding: 7em 0 0 0;
  z-index: 0;
  position: relative; }
  @media (max-width: 991.98px) {
    .ftco-footer .ftco-footer-widget {
      margin-bottom: 40px; } }
  .ftco-footer .ftco-footer-widget ul {
    margin: 0;
    padding: 0; }
    .ftco-footer .ftco-footer-widget ul li {
      margin-bottom: 8px; }
      .ftco-footer .ftco-footer-widget ul li a {
        color: rgba(0, 0, 0, 0.6);
        color: #000000; }
        .ftco-footer .ftco-footer-widget ul li a span {
          color: rgba(255, 255, 255, 0.6);
          color: #1a8cff;
          font-size: 14px; }
        .ftco-footer .ftco-footer-widget ul li a:hover {
          color: #1a8cff; }
  .ftco-footer p {
    color: rgba(0, 0, 0, 0.7); }
  .ftco-footer a {
    color: rgba(0, 0, 0, 0.7);
    color: #1a8cff; }
    .ftco-footer a:hover {
      color: #fff; }
  .ftco-footer .ftco-heading-2 {
    font-size: 18px;
    font-weight: 900;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 40px;
    position: relative; }
    .ftco-footer .ftco-heading-2:after {
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 30px;
      height: 3px;
      background: #1a8cff;
      content: ''; }
  .ftco-footer .logo a {
    font-weight: 900;
    color: #000000; }
    .ftco-footer .logo a span.flaticon {
      font-size: 40px;
      color: #1a8cff; }
    .ftco-footer .logo a div.logo1 span {
      font-size: 22px;
      line-height: 1;
      display: block;
      text-transform: capitalize; }
    .ftco-footer .logo a div.logo1 span.sub {
      color: #1a8cff;
      font-size: 13px;
      font-weight: 500; }
  .ftco-footer .bg-primary {
    background: #000000 !important;
    position: relative;
    z-index: 0; }
    .ftco-footer .bg-primary p {
      color: rgba(255, 255, 255, 0.7); }
      .ftco-footer .bg-primary p a {
        color: #fff;
        text-decoration: underline; }

.ftco-footer-social li {
  list-style: none;
  margin: 0 5px 0 0;
  display: inline-block; }
  .ftco-footer-social li a {
    height: 40px;
    width: 40px;
    display: block;
    background: #1a8cff;
    position: relative;
    border-radius: 4px; }
    .ftco-footer-social li a span {
      position: absolute;
      font-size: 20px;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      color: #fff !important; }
`;




export const FooterC = () => {
    return (
		<Container fluid="true">
        <footer class="ftco-footer">
		<div class="container mb-5 pb-4">
			<div class="row">
				<div class="col-lg col-md-6">
					<div class="ftco-footer-widget">
						<h2 class="logo d-flex align-items-center">
							<a href="#" class="d-flex align-items-center">
								<div class="icon"><span class="flaticon-stethoscope flaticon"></span></div>
								<div class="logo1">
									<span>EVENT TIME</span>
									<span class="sub">FrontEnd Company</span>
								</div>
							</a>
						</h2>
						<p>nice place to be in nice types</p>
						<ul class="ftco-footer-social list-unstyled mt-4">
							<li><a href="#"><span class="fa fa-twitter"></span></a></li>
							<li><a href="#"><span class="fa fa-facebook"></span></a></li>
							<li><a href="#"><span class="fa fa-instagram"></span></a></li>
							<li><a href="#"><span class="fa fa-chrome"></span></a></li>
							<li><a href="#"><span class="fa fa-linkedin"></span></a></li>
						</ul>
					</div>
				</div>

				<div class="col-lg col-md-6">
					<div class="ftco-footer-widget">
						<h2 class="ftco-heading-2">Services</h2>
						<ul class="list-unstyled">
							<li><a href="#"><span class="fa fa-chevron-right mr-2"></span>FAQ and FAQ</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Support</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Acknowledge</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Training</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Learning</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Careers</a></li>
							<li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Students</a></li>
						</ul>
					</div>
				</div>

				<div class="col-lg col-md-6">
					<div class="ftco-footer-widget">
						<h2 class="ftco-heading-2">Twitter</h2>
						<div className="selfCenter standardWidth">
						<TwitterTimelineEmbed sourceType="collection" id="576828964162965504" options={{height: 220}} />
</div>
					</div>
				</div>

				<div class="col-lg col-md-6">
					<div class="ftco-footer-widget">
						<h2 class="ftco-heading-2">Have a Questions?</h2>
						<div class="block-23 mb-3">
							<ul>
								<li><span class="fa fa-map-marker mr-3"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
								<li><a href="#"><span class="fa fa-phone mr-3"></span><span class="text">+2 392 3929 210</span></a></li>
								<li><a href="#"><span class="fa fa-paper-plane mr-3"></span><span class="text">info@yourdomain.com</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		</footer>
		</Container>
    )
}
 

