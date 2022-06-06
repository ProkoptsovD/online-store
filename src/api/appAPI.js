class Api {
    static devEndPoint = 'http://localhost:4000/';
    static defaultHeaders = {
        "content-type": "application/json",
        "accept": "application/json"
    }

    constructor(...args) {
        this.endPoint = args.endPoint || Api.devEndPoint;
        this.headers = args.headers || Api.defaultHeaders;
    }
    options = (graphqlQuery) => ({
            "method": "POST",
            "headers": this.headers,
            "body": JSON.stringify(graphqlQuery),
        });
    fetchData = async (query) => await fetch(this.endPoint, this.options(query));
    getProductsByCategoryName = async (categoryName) => {
        try{
            const getProductsByCategoryNameQuery = {
                "operationName": "getProductsByCategoryName",
                "query": `query getProductsByCategoryName ($category:CategoryInput) {
                    category(input: $category) {
                        name,
                        products {
                          id,
                          brand,
                          name,
                          inStock,
                          gallery,
                          prices {
                            amount,
                            currency {
                              label,
                              symbol
                            }
                          }
                          attributes{
                            id,
                            name,
                            type,
                            items {
                              id,
                              displayValue,
                              value
                            }
                          }
                        }
                    }
                }`,
                "variables": {
                    "category": {"title":`${categoryName}`}
                },
            }

            return this.fetchData(getProductsByCategoryNameQuery).then(res => res.json()).then(res => res.data.category);
        } catch (e) {
            console.log(e);
        }
    };
    getDataToInitApp = async () => {
        const getDataToInitAppQuery = {
            "operationName": "getDataToInitApp",
                "query": `query getDataToInitApp {
                    categories {
                      name
                    }
                    currencies {
                    label,
                    symbol,
                  }
                }`,
        }

        return this.fetchData(getDataToInitAppQuery).then(res => res.json()).then(res => res.data);
    };
    getProductById = async (id) => {
        const getProductByIdQuery = {
            "operationName": "getProductById",
                "query": `query getProductById($id: String!) {
                    product(id: $id) {
                      id,
                      brand,
                      name,
                      inStock,
                      gallery,
                      description,
                      prices {
                        amount,
                        currency {
                          label,
                          symbol
                        }
                      }
                      attributes{
                        id,
                        name,
                        type,
                        items {
                          id,
                          displayValue,
                          value
                        }
                      }
                    } 
                  }`,
                  "variables": {
                      "id":`${id}`,
                  },
        }

        return this.fetchData(getProductByIdQuery).then(res => res.json()).then(res => res.data.product);
    }
}
export const appAPI = new Api();