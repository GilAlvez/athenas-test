import axios from 'axios';
import { useState } from 'react';

const CreateModal = ({ refetch }: { refetch: () => Promise<void> }) => {
	const [values, setValues] = useState<{
		name?: string;
		age?: string;
		gender?: string;
		address?: string;
		birthday?: string;
	}>();

	const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		setValues({ ...values, [name]: value });
	};

	const handleCreate = async () => {
		try {
			await axios.post('/api/v1/users', { ...values, age: +(values?.age as string) });
			alert('User Created');
			refetch();
		} catch (error: any) {
			alert(error.response.data.message);
		}
	};

	return (
		<div
			className="modal fade"
			id="createModal"
			tabIndex={-1}
			aria-labelledby="createModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="modal-title fs-5" id="createModalLabel">
							Create New User
						</h2>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<div className="row g-2">
							<div className="col-10">
								<label htmlFor="name">Name</label>
								<input
									id="name"
									name="name"
									type="text"
									className="form-control"
									value={values?.name}
									onChange={handleInputChange}
								/>
							</div>
							<div className="col-2">
								<label htmlFor="age">Age</label>
								<input
									id="age"
									name="age"
									type="number"
									className="form-control"
									value={values?.age}
									onChange={handleInputChange}
								/>
							</div>
							<div className="col-6">
								<label htmlFor="gender">Gender</label>
								<input
									id="gender"
									name="gender"
									type="text"
									className="form-control"
									value={values?.gender}
									onChange={handleInputChange}
								/>
							</div>

							<div className="col-6">
								<label htmlFor="birthday">Birthday</label>
								<input
									id="birthday"
									name="birthday"
									type="date"
									className="form-control"
									value={values?.birthday}
									onChange={handleInputChange}
								/>
							</div>
							<div className="col-12">
								<label htmlFor="address">Address</label>
								<input
									id="address"
									name="address"
									type="text"
									className="form-control"
									value={values?.address}
									onChange={handleInputChange}
								/>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" className="btn btn-primary" onClick={handleCreate}>
							Create User
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateModal;
