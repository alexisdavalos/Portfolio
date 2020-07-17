import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Timeline from "./Timeline.js";
const AboutModal = ({ darkMode, toggle, setToggle, viewProjects }) => {
	return (
		<>
			{toggle ? (
				<div className="modal">
					<div
						className="modal-background"
						onClick={() => setToggle(!toggle)}
					></div>

					<div className="modal-card">
						<header
							className={
								darkMode
									? "modal-card-head"
									: "modal-card-head has-background-dark"
							}
						>
							<p
								className={
									darkMode
										? "modal-card-title has-text-dark"
										: "modal-card-title has-text-light"
								}
							>
								About Me
							</p>
							<button
								className="delete"
								onClick={() => setToggle(!toggle)}
								aria-label="close"
							></button>
						</header>

						<section
							className={
								darkMode
									? "modal-card-body has-background-dark"
									: "modal-card-body"
							}
						>
							<div
								className={
									darkMode ? "summary has-text-light" : "summary has-text-dark"
								}
							>
								<p>
									My name is Alexis Davalos, I am a Full-Stack Developer with a
									passion for constantly learning and pushing the boundaries of
									my understanding. I am passionate about philosophy, language,
									technology and wellness/fitness. I am fascinated by life and
									our ability to share our stories with one another.
								</p>
							</div>

							<Timeline darkMode={darkMode} />
						</section>
						<footer
							className={
								darkMode
									? "modal-card-foot has-text-dark has-background-light is-flex is-bold"
									: "modal-card-foot has-text-light has-background-dark is-flex is-bold"
							}
						>
							<p>View Projects</p>
							<p>
								<FaArrowAltCircleDown
									color={darkMode ? "#333" : "whitesmoke"}
									size={"2rem"}
									onClick={() => viewProjects()}
								/>
							</p>
						</footer>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};
export default AboutModal;
