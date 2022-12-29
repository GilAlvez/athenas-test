import DataGrid, { Column, SearchPanel } from 'devextreme-react/data-grid';
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
		</section>
	);
}
