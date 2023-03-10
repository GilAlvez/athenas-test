import axios from 'axios';

const RemoveModal = ({ id, refetch }: { id?: number; refetch: () => Promise<void> }) => {
	const handleRemove = async () => {
		try {
			await axios.delete(`/api/v1/users/${id}`);
			alert('User Deleted');
			refetch();
		} catch (error: any) {
			alert(error.response.data.message);
		}
	};
	return (
		<div
			className="modal fade"
			id="removeModal"
			tabIndex={-1}
			aria-labelledby="removeModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="modal-title fs-5" id="removeModalLabel">
							Remove User: {id}
						</h2>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">Are you sure you want to delete this user?</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" className="btn btn-danger" onClick={handleRemove}>
							Yes, remove!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RemoveModal;
