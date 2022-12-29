import DataGrid, { Column, SearchPanel } from 'devextreme-react/data-grid';
import { useState } from 'react';
import CreateModal from '../components/Modals/CreateModal';
import RemoveModal from '../components/Modals/RemoveModal';
import ViewModal from '../components/Modals/ViewModal';
import { pagination } from '../data/pagination';
import { listAllUsers } from '../data/users';

export default function Home() {
	const [selectedUser, setSelectedUser] = useState<number>();

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

	// Pagination Treatment
	// Transform totalPages into a array of numbered pages, and ignore index 0
	const arrayOfPages = Array.from({ length: pagination.totalPages }).map((_, index) => index + 1);

	return (
		<section>
			<button type="button" className="btn btn-primary" onClick={() => createUserModal()}>
				Create new user
			</button>

			<DataGrid
				id="dataGrid"
				dataSource={listAllUsers}
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
				<Column dataField="birthday" />
				<Column
					dataField="id"
					caption="Actions"
					cssClass={'d-flex justify-content-center gap-2'}
					cellRender={RenderActionsCell}
				/>
			</DataGrid>

			{/* PAGINATION */}
			<nav aria-label="Page navigation example">
				<ul className="mt-2 pagination justify-content-end">
					<li className="page-item">
						<span className="page-link">Prev</span>
					</li>
					{arrayOfPages.map((page) => (
						<li className="page-item" key={page}>
							<span className={`page-link ${pagination.current === page && 'active'}`}>{page}</span>
						</li>
					))}
					<li className="page-item">
						<span className="page-link">Next</span>
					</li>
				</ul>
			</nav>

			{/* MODALS */}
			<ViewModal id={selectedUser} />
			<RemoveModal id={selectedUser} />
			<CreateModal />
		</section>
	);
}
