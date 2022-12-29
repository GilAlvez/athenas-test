import DataGrid, { Column, SearchPanel } from 'devextreme-react/data-grid';
import { pagination } from '../data/pagination';
import { listAllUsers } from '../data/users';

export default function Home() {
	const RenderActionsCell = () => {
		return (
			<>
				<button
					type="button"
					className="btn btn-sm btn-primary bi bi-pencil-fill"
					aria-label="View"
				/>
				<button
					type="button"
					className="btn btn-sm btn-danger bi bi-trash-fill"
					aria-label="Remove"
				/>
			</>
		);
	};

	// Pagination Treatment
	// Transform totalPages into a array of numbered pages, and ignore index 0
	const arrayOfPages = Array.from({ length: pagination.totalPages }).map((_, index) => index + 1);

	return (
		<section>
			<button type="button" className="btn btn-primary">
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
				<Column dataField="address.street" />
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
		</section>
	);
}
