/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import DataGrid, { Column, SearchPanel } from 'devextreme-react/data-grid';
import { useEffect, useState } from 'react';
import CreateModal from '../components/Modals/CreateModal';
import RemoveModal from '../components/Modals/RemoveModal';
import ViewModal from '../components/Modals/ViewModal';

export default function Home() {
	const [selectedUser, setSelectedUser] = useState<number>();
	const [data, setData] = useState({ users: [], pagination: { total: 0, current: 1 } });
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	// Fetch Data
	const getAllUsers = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get('/api/v1/users', { params: { page } });
			setData(data);
		} catch (error: any) {
			alert(error.response.data.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getAllUsers();
	}, [page]);

	// Transform totalPages into a array of numbered pages, and ignore index 0
	const arrayOfPages = Array.from({ length: data.pagination.total }).map((_, index) => index + 1);

	// Modal Handlers
	const createUserModal = () => {
		const { Modal } = require('bootstrap');
		const myModal = new Modal('#createModal');
		myModal.show();
	};
	const viewUserModal = (id: number) => {
		setSelectedUser(id);
		const { Modal } = require('bootstrap');
		const myModal = new Modal('#editModal');
		myModal.show();
	};
	const removeUserModal = (id: number) => {
		setSelectedUser(id);
		const { Modal } = require('bootstrap');
		const myModal = new Modal('#removeModal');
		myModal.show();
	};

	// Actions Cell
	const RenderActionsCell = (data: any) => {
		return (
			<>
				<button
					type="button"
					className="btn btn-sm btn-primary bi bi-pencil-fill"
					aria-label="View"
					onClick={() => viewUserModal(data.value)}
				/>
				<button
					type="button"
					className="btn btn-sm btn-danger bi bi-trash-fill"
					aria-label="Remove"
					onClick={() => removeUserModal(data.value)}
				/>
			</>
		);
	};

	return (
		<section>
			<button type="button" className="btn btn-primary" onClick={() => createUserModal()}>
				Create new user
			</button>

			{/* PAGINATION */}
			<nav aria-label="Page navigation example">
				<ul className="mt-2 pagination justify-content-end">
					<li className="page-item">
						<span className="page-link" onClick={() => page > 1 && setPage((page) => page - 1)}>
							Prev
						</span>
					</li>
					{arrayOfPages.map((page) => (
						<li className="page-item" key={page}>
							<span
								className={`page-link ${data.pagination.current === page && 'active'}`}
								onClick={() => setPage(page)}
							>
								{page}
							</span>
						</li>
					))}
					<li className="page-item">
						<span
							className="page-link"
							onClick={() => page < data.pagination.total && setPage((page) => page + 1)}
						>
							Next
						</span>
					</li>
				</ul>
			</nav>

			{loading ? (
				<h3 className="my-3">Carregando</h3>
			) : (
				<DataGrid
					id="dataGrid"
					dataSource={data.users}
					allowColumnReordering
					columnAutoWidth
					rowAlternationEnabled
					showBorders
				>
					<SearchPanel visible highlightCaseSensitive />

					<Column dataField="name" />
					<Column dataField="age" />
					<Column dataField="gender" />
					<Column dataField="address" />
					<Column dataField="birthday" dataType="date" />
					<Column
						dataField="id"
						caption="Actions"
						cssClass={'d-flex justify-content-center gap-2'}
						cellRender={RenderActionsCell}
					/>
				</DataGrid>
			)}

			{/* MODALS */}
			<ViewModal id={selectedUser} refetch={getAllUsers} />
			<RemoveModal id={selectedUser} refetch={getAllUsers} />
			<CreateModal refetch={getAllUsers} />
		</section>
	);
}
