import { useRouter } from "next/router";
import { client } from "../../utils/shopify-client";
import Link from "next/link";
import { Button, Grid, Image, Input, List } from "semantic-ui-react";
import { useEffect, useState } from "react";

const PID = ({ product }) => {
  const [sessiocCheckout, setSessionCheckout] = useState();

  useEffect(() => {
    async function session() {
      const session = await client.checkout.create();
      setSessionCheckout(session);

      console.log("session is", session);
    }

    session();
  }, []);
  // const router = useRouter();
  // const { productId } = router.query;

  // async function sessionId() {
  //   const session = await client.checkout.create();
  //   console.log("session is", session);
  //   console.log('hhhh')
  // }

  // const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   if(loading){

  //   }
  //   (async () => {
  //     const session = await client.checkout.create();
  //     console.log("session is", session);
  //     setSessionCheckout(session);

  //   })();
  // }, []);

  // console.log("dd", product);
  const [image, setImage] = useState(product.images[0]);
  return (
    <div>
      <Grid container>
        <Grid.Row>
          <Grid.Column width={10}>
            <Grid.Row style={{ padding: "30px 12px" }}>
              <Image src={image.src} size="large" />
            </Grid.Row>

            <Grid.Row style={{ display: "flex" }}>
              {product.images.map((image) => (
                <List.Item onClick={() => setImage(image)}>
                  <Image src={image.src} size="small" />
                </List.Item>
              ))}
            </Grid.Row>
            <Link href="/">
              <Button>Back</Button>
            </Link>
          </Grid.Column>
          {/* second column */}
          <Grid.Column width={6}>
            <Grid.Row>
              <h2>{product.title}</h2>
              <br />
              <p>{product.description}</p>
              <p>
                &nbsp;
                {product.variants[0].title} color price is{" "}
                <h4>{product.variants[0].price}</h4>
              </p>
              <p>
                &nbsp;
                {product.variants[1].title} color price is{" "}
                <h4>{product.variants[1].price}</h4>
              </p>
            </Grid.Row>
            <Grid.Row>
              <Button
                onClick={() => {
                  const sessionMain = async () =>
                    await client.checkout.addLineItems(sessiocCheckout.id, [
                      {
                        variantId: product.variants[0].id.split("_")[2],
                        quantity: 2,
                      },
                    ]);
                  setSessionCheckout("sessionMain is", sessionMain);
                  console.log("text");
                }}
              >
                Add To Cart
              </Button>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const productId = query.productId;
  const product = await client.product.fetch(productId); // Fetch product
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
  //hello
};

export default PID;
