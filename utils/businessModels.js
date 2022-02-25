export const businessModels = [
      {
        "name":"Banking-as-a-service",
        "icon":"/Banking-as-a-Service.png",
        "description":"Banks provide full range of white-labelled core functionalities in order for fintech and enterprises to build their own customer-facing bank offerings built on the bank’s infrastructure",
        "pricingModels":[
          {
            "name":"Premium (unspecified)",
            "icon":"Premium (unspecified).png",
            "title":"Minimum number of API consumers required per year",
            "description":"API provider notes that there is a cost for using the APIs, but details are not provided on the developer portal",
            "head":[
              {"name":"Head-tier charge per call ($/call):",
              "value":null  },
              {"name":"Number of API calls per Head consumer:",
              "value":null  }
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
                "value":null  
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
                "value":null  
              }
            ]
          },
          {
            "name":"Tiered",
            "icon":"/Tiered.png",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays different pricing ranges according to volume of API calls and/or suite of services provided",
            "head":[
              {"name":"Head-tier charge per call ($/call):",
              "value":null  },
              {"name":"Number of API calls per Head consumer:",
              "value":null  }
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
                "value":null  
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
                "value":null  
              }
            ]
          },
          {
            "name":"Transaction fee",
            "icon":"https://dummyimage.com/60x60/000/fff",
            "title":"Minimum transaction volume required per year ($)",
            "description":"Developer/API consumer pays a percentage of overall transaction volume paid or a flat fee for each transaction made by API (an initiation/flagfall fee is sometimes included)",
            "head":[
              {"name":"Commission rate as % of transaction volume for HEAD:",
              "value":null  },

     
            ],
            "tail":[
              {"name":"Commission rate as % of transaction volume for LONG-TAIL:",
              "value":null  },
  
            ]
          },
          {
            "name":"Unit-based",
            "icon":"https://dummyimage.com/60x60/000/fff",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays for a specific number of units/API calls, often via subscription model where a set number of API calls can be made on a daily or monthly basis",
            "head":[
              {"name":"Annual subscription fee for HEAD($):",
              "value":null  },
              {"name":"Number of connected account per API consumer:",
              "value":null  }
            ],
            "tail":[
              { "name":"Annual subscription fee for LONG-TAIL ($):",
              "value":null  },
              {"name":"Number of connected account per API Long-tail consumer:",
              "value":null  }
            ]
          },
        ],
        "costModels":[
          {
            name:'I will add my own data',
            cost:null,
            costYear:null
            },
            {
              name: 'Germain Bahri Cost Model - Banking-as-a-Service',
              cost: 1511800,
              costYear:2674700
              },
              
        ]
      },
      {
        "name":"Marketplace",
        "description":"Banks that offer marketplaces that include third party apps and providers",
        "icon":"/Marketplace.png",
        "pricingModels":[
          {
            "name":"Cost per action (CPA)",
            "icon":"https://dummyimage.com/60x60/000/fff",
            "title":"Minimum number of transactions required per year",
            "description":"Developer/API consumer gets paid upon a specific end user action, for instance a purchase of a product (customer acquisition), or when an end user shares their contact details (lead generation)",
            "head":[
             { "name":"Flat fee per action ($)",
               "value":null  }
            ]
          },
          {
            "name":"Cost per click (CPC)",
            "icon":"https://dummyimage.com/60x60/000/fff",
            "title":"Minimum number of clicks required per year",
            "description":"Developer/API consumer gets paid when the end user clicks on a specific link",
            "head":[
              { "name":"Flat fee per click ($)",
                "value":null  }
             ]

          },
          {
            "name":"Referral/Registration",
            "icon":"https://dummyimage.com/60x60/000/fff",
            "title":"Minimum number of clicks required per year",
            "description":"Developer/API consumer gets paid when an end customer referred on to API provider logs in or registers through the API",
            "head":[
              { "name":"Flat fee per click ($)",
                "value":null  }
             ]
          },
          {
            "name":"Revenue share",
            "icon":"https://dummyimage.com/60x60/000/fff",
            "title":"Minimum transaction volume required per year ($)",
            "description":"Developer/API consumer gets paid a share of the overall transaction volume of a sale or transaction",
            "head":[
              { "name":"Commission rate as % of transaction volume:",
                 "value":null  }
             ]
          }
        ],
        "costModels":[
          {
            name:'I will add my own data',
            cost:null,
            costYear:null
            },
            {
              name: 'Germain Bahri Cost Model - Marketplace',
              cost: 581500,
              costYear:1511800
              },
              {
                name: 'Starling Bank Cost Model - Marketplace',
                cost: 4888000,
                costYear:16320000
                },
        ]
      },
      {
        "name":"Partner",
        "description":"Banks seek out fintech partners with non-competitive products and use partner APIs with selected fintech to extend product range to their customers",
        "icon":"/Partner_APIs.png",
        "pricingModels":[
          {
            "name":"Freemium",
            "icon":"/Freemium.png",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays nothing up to a predefined limit. Payment is only realised for usage on top of that limit. Often used in conjunction with Tiered or Unit-based pricing (after the freemium limit has been reached)",
            "head":[
              {"name":"Head-tier charge per call ($/call):",
              "value":null  },
              {"name":"Number of API calls per Head consumer:",
              "value":null  }
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
                "value":null  
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
                "value":null  
              }
            ]
          },
          {
            "name":"Premium (unspecified)",
            "icon":"Premium (unspecified).png",
            "title":"Minimum number of API consumers required per year",
            "description":"API provider notes that there is a cost for using the APIs, but details are not provided on the developer portal",
            "head":[
              {"name":"Head-tier charge per call ($/call):",
                "value":null  
            },
              {"name":"Number of API calls per Head consumer:",
              "value":null }
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
                "value":null 
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
                "value":null 
              }
            ]
    
          },
          {
            "name":"Tiered",
            "icon":"/Tiered.png",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays different pricing ranges according to volume of API calls and/or suite of services provided",
            "head":[
              {"name":"Head-tier charge per call ($/call):",
              "value":null 
            },
              {"name":"Number of API calls per Head consumer:",
              "value":null }
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
                "value":null 
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
                "value":null 
              }
            ]
          },
          {
            "name":"Pay as you go",
            "icon":"https://dummyimage.com/60x60/000/fff",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays for what is consumed - charged per API call made with no flagfall fee (no minimum consumption or commission)",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
                "value":null  
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
                "value":null  
              }
            ]
          }
          ],
          "costModels":[
            {
              name:'I will add my own data',
              cost:null,
              costYear:null
              },
              {
                name: 'Germain Bahri Cost Model - Open APIs/Premium/Partner/Incubator/Acquisition',
                cost: 581500,
                costYear:2674700
                },
          ]
      },
      {
        "name":"Premium",
        "description":"Banks that offer product APIs at a fee for use",
        "icon":"/Premium.png",
        "pricingModels":[
          {
            "name":"Freemium",
            "icon":"/Freemium.png",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays nothing up to a predefined limit. Payment is only realised for usage on top of that limit. Often used in conjunction with Tiered or Unit-based pricing (after the freemium limit has been reached)",
            "head":[
              {"name":"Head-tier charge per call ($/call):",
              "value":null  },
              {"name":"Number of API calls per Head consumer:",
              "value":null  }
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
                "value":null  
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
                "value":null  
              }
            ]
          },
          {
            "name":"Premium (unspecified)",
            "icon":"Premium (unspecified).png",
            "title":"Minimum number of API consumers required per year",
            "description":"API provider notes that there is a cost for using the APIs, but details are not provided on the developer portal",
            "head":[
              {"name":"Head-tier charge per call ($/call):",
              "value":null  },
              {"name":"Number of API calls per Head consumer:",
              "value":null  }
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
                "value":null  
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
                "value":null  
              }
            ]
    
          },
          {
            "name":"Tiered",
            "icon":"/Tiered.png",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays different pricing ranges according to volume of API calls and/or suite of services provided",
            "head":[
              {"name":"Head-tier charge per call ($/call):",
              "value":null  },
              {"name":"Number of API calls per Head consumer:",
              "value":null  }
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
                "value":null  
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
                "value":null  
              }
            ]
          },
          {
            "name":"Pay as you go",
            "icon":"https://dummyimage.com/60x60/000/fff",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays for what is consumed - charged per API call made with no flagfall fee (no minimum consumption or commission)",
            "head":[
              {"name":"Head-tier charge per call ($/call):",
              "value":null  },
              {"name":"Number of API calls per Head consumer:",
              "value":null  }
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
                "value":null  
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
                "value":null  
              }
            ]
          }
          ],
          "costModels":[
            {
              name:'I will add my own data',
              cost:null,
              costYear:null
              },
              {
                name: 'Germain Bahri Cost Model - Open APIs/Premium/Partner/Incubator/Acquisition',
                cost: 581500,
                costYear:2674700
                },
          ]
      },
  ]

























