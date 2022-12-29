import axios from 'axios';
import { useEffect, useState } from 'react';
import * as yup from 'yup';

const EditModal = ({ id, refetch }: { id?: number; refetch: () => Promise<void> }) => {
	const [values, setValues] = useState<{
		name?: string;
		age?: string;
		gender?: string;
		address?: string;
		birthday?: string;
	}>();
	const [errors, setErrors] = useState([]);

	const handleInputChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.currentTarget;
		setValues({ ...values, [name]: value });
	};

	useEffect(() => {
		const getUserById = async () => {
			try {
				const { data } = await axios.get(`/api/v1/users/${id}`);
				setValues(data.user);
			} catch (error: any) {
				alert(error.response.data.message);
			}
		};

		id && getUserById();
	}, [id]);

	const updateUserSchema = yup.object({
		name: yup.string().required().min(2).max(255).trim(),
		age: yup.number().required().min(1, 'Min age is 1'),
		gender: yup.string().required().oneOf(['MALE', 'FEMALE']),
		birthday: yup.date().required(),
		address: yup.string().required().max(50).trim(),
	});

	const handleUpdate = async () => {
		updateUserSchema
			.validate({ ...values }, { abortEarly: false })
			.then(async (values) => {
				try {
					setErrors([]);
					await axios.put(`/api/v1/users/${id}`, { ...values });
					alert('User Updated');
					refetch();
				} catch (error: any) {
					alert(error.response.data.message);
				}
			})
			.catch((err) => setErrors(err.errors));
	};
	return (
		<div
			className="modal fade"
			id="editModal"
			tabIndex={-1}
			aria-labelledby="editModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h2 className="modal-title fs-5" id="editModalLabel">
							Edit User: {values?.name}
						</h2>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<div>
							{errors.map((error, i) => (
								<div key={i} className="mx-3 my-1 alert alert-danger" role="alert">
									{error}
								</div>
							))}
						</div>
						<hr />
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
								<select
									id="gender"
									name="gender"
									className="form-select"
									value={values?.gender}
									onChange={handleInputChange}
								>
									<option value="MALE" selected>
										Male
									</option>
									<option value="FEMALE">Female</option>
								</select>
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
						<button type="button" className="btn btn-primary" onClick={handleUpdate}>
							Edit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditModal;
