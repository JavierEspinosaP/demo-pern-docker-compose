import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form, InputNumber, Select, Input } from "antd";
import { useEffect } from "react";
import { update } from "../../../../features/books/booksSlice";

const EditModal = ({ visible, setVisible }) => {
  const { Option } = Select;
  const { genres } = useSelector((state) => state.genres);
  const { book } = useSelector((state) => state.books);


  const GenreId = book.Genres?.map((element) => element.id)

  useEffect(() => {
    const bookToEdit = {
      ...book,
      GenreId
    };
    form.setFieldsValue(bookToEdit);
  }, [book]);

  const selectOption = genres.map((genre) => {
    return (
      <Option key={genre.id} value={genre.id}>
        {genre.name}
      </Option>
    );
  });

  const dispatch = useDispatch();

  const onFinish = (values) => {
    const bookWithId = { ...values, id: book.id };
    dispatch(update(bookWithId));
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  }
  const [form] = Form.useForm();
  return (
    <Modal
      forceRender
      title="Edit Book"
      open={visible}
      onCancel={handleClose}
      footer={[


      ]}
    >
      <Form onFinish={onFinish} form={form}>
        <Form.Item label="Book Name" name="name">
          <Input placeholder="Book name" />
        </Form.Item>
        <Form.Item name="GenreId" label="Select Genres">
          <Select mode="multiple" placeholder="Please select genre">
            {selectOption}
          </Select>
        </Form.Item>
        <Form.Item label="Price">
          <Form.Item name="price" noStyle>
            <InputNumber />
          </Form.Item>
          <span className="ant-form-text"> €</span>
        </Form.Item>
        <Button key="submit" type="primary" htmlType="submit" onClick={onFinish}>
          Submit
        </Button>
        <Button key="back" onClick={handleClose}>
          Cancel
        </Button>,
      </Form>
    </Modal>
  );
};

export default EditModal;
