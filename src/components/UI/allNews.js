import {
  ArrowDownOutlined,
  CalendarOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Image from "next/image";

const AllNews = ({ allNews }) => {
  console.log(allNews);
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #TODAY HIGHLIGHT
      </h1>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allNews.map((news) => (
          <Col key={news.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={news?.image_url}
                  width={500}
                  height={200}
                  responsive
                  alt="news"
                />
              }
            >
              <Meta title={news?.title} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px",
                  background: "#000",
                  width: "100%",
                }}
              ></div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <span>
                  <CalendarOutlined /> {news?.release_date}
                </span>
                <span>
                  <CalendarOutlined /> {news?.comment_counter}
                </span>
                <span>
                  <ProfileOutlined /> {news?.category}
                </span>
              </p>
              <p style={{ fontSize: "15px" }}>
                {news?.description.length > 100
                  ? news?.description.slice(0, 70) + "..."
                  : news?.description}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  width: "100%",
                  color: "white",
                  marginTop: "20px",
                  backgroundColor: "black",
                  padding: "2px 5px",
                  fontWeight: "300",
                  letterSpacing: "3px",
                  textAlign: "center",
                }}
              >
                keep reading <ArrowDownOutlined />
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllNews;
