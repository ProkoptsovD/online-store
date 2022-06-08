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
    fetchData = async (query) => {
        try {
            const response = await fetch(this.endPoint, this.options(query));
            if (response.ok) {
                const parsedResponse = await response.json();
                
                return parsedResponse;
            }

            return Promise.reject(new Error(`there is no such page for ${query} `))
        } catch (e) {
            console.log(e);
        }
    };
    getProductsByCategoryName = async (categoryName) => {
        const getProductsByCategoryNameQuery = {
            "operationName": "getProductsByCategoryName",
            "query": `query getProductsByCategoryName ($category:CategoryInput) {
                category(input: $category) {
                    name,
                    products {
                        id,
                        brand,
                        name,
                        category,
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
        const response = await this.fetchData(getProductsByCategoryNameQuery);
        const { category } = await response.data;

        return category;
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
        const response = await this.fetchData(getDataToInitAppQuery);
        const { data } = await response;

        return data;
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
        const response = await this.fetchData(getProductByIdQuery);
        const { product } = await response.data;
        
        return product;
    }
}

export const productAPI = new Api();