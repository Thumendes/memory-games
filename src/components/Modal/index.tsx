import { ListItem } from "../../data/list";

interface ModalProps {
  item: ListItem;
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  console.log(item);
  return (
    <div className="w-screen h-screen bg-black bg-opacity-20 fixed top-0 left-0 z-10 flex items-center justify-center">
      <div className="max-w-sm ">
        <div className="flex items-center justify-center rounded-t-lg bg-white">
          {item.value}
        </div>
        <div className="p-6 flex flex-col bg-gray-100 rounded-b-lg">
          <span className="text-2xl text-gray-900 font-bold mb-4">
            {item.name}
          </span>
          <p className="text-gray-600 text-xl">{item.description}</p>
          <button
            onClick={onClose}
            className="bg-white rounded-lg border border-gray-200 px-4 py-2 mt-6"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
