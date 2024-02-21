import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen,setIsOpen}) => {
	return (
		<>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam voluptatibus dolores illo, quasi veniam impedit excepturi exercitationem totam voluptates animi voluptate sit praesentium blanditiis eveniet eum harum dolorem. Maiores placeat ratione totam optio. Voluptatum a maxime molestias itaque. Aliquid voluptate nulla excepturi ipsum culpa, at quam quia autem minima!</p>
			</Modal>
		</>
	);
};

export default AddTaskModal;