import { Button, Form, InputNumber, Select, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { create } from "../../../features/books/booksSlice";
import './AddBook.css'



const AddBook = () => {
  const dispatch = useDispatch();
  const { Option } = Select;
  const { genres } = useSelector((state) => state.genres);

  const selectInput = genres.map((genre) => {
    return (
      <Option key={genre.id} value={genre.id}>
        {genre.name}
      </Option>
    );
  });



  const onFinish = (values) => {
    dispatch(create(values));
    form.resetFields(); // llamamos a la instancia y ejecutamos su metodo resetFields
  };

  const [form] = Form.useForm(); // instancia del formulario
  return (
    <section className='formContainer'>
      <Form  onFinish={onFinish} form={form}>
        {" "}
        {/**conecto la instancia que he creado a mi formulario */}
        <Form.Item label="Book Name" name="name">
          <Input placeholder="Book name" />
        </Form.Item>
        <Form.Item name="GenreId" label="Select Genres">
          <Select mode="multiple" placeholder="Please select genre">
            {selectInput}
          </Select>
        </Form.Item>
        <Form.Item label="Price">
          <Form.Item name="price" noStyle>
            <InputNumber />
          </Form.Item>
          <span className="ant-form-text"> €</span>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>

  );
};

export default AddBook;
