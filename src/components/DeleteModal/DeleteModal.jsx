import Button from "../Button/Button";
import "./DeleteModal.scss";
import closeSvg from "../../assets/Icons/close-24px.svg";

export default function DeleteModal({
  paintingName,
  onCancel,
  onDelete,
}) {
  return (
    <div className="delete-modal">
      <div className="delete-modal__container">
        <button
          className="delete-modal__close-button"
          type="button"
          onClick={onCancel}
        >
          <img src={closeSvg} />
        </button>
        <div>
          <h1 className="delete-modal__header">
            Delete {paintingName}?
          </h1>
          <p className="delete-modal__content p1">
            Please confirm that you’d like to delete {paintingName} from the painting
            list. You won’t be able to undo this action.
          </p>
        </div>

        <div className="delete-modal__buttons">
          <Button title="Cancel" variant="secondary" onClick={onCancel} />
          <Button title="Delete" variant="delete" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}