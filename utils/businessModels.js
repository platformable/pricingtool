export const businessModels = [
    {
      "name":"Acquisition",
      "pricingModels":[
      {
        
        "name":"Freemium",
        "description":"Developer/API consumer pays nothing up to a predefined limit. Payment is only realised for usage on top of that limit. Often used in conjunction with Tiered or Unit-based pricing (after the freemium limit has been reached)",
        "title":"Minimum number of API consumers required per year",
        "head":[
          {"name":"Head-tier charge per call ($/call):"},
          {"name":"Number of API calls per Head consumer:"}
        ],
        "tail":[
        {"name":"Long-tail-tier charge per call ($/call):"},
        {"name":"Number of API calls per Long-tail consumer:"}
        ]
      },
      {
        "name":"Premium (unspecified)",
        "title":"Minimum number of API consumers required per year",
        "description":"API provider notes that there is a cost for using the APIs, but details are not provided on the developer portal",
        "head":[
          {"name":"Head-tier charge per call ($/call):"},
          {"name":"Number of API calls per Head consumer:"}
        ],
        "tail":[
          {"name":"Long-tail-tier charge per call ($/call):",},
          {"name":"Number of API calls per Long-tail consumer:",}
        ]

      },
      {
        "name":"Tiered",
        "title":"Minimum number of API consumers required per year",
        "description":"Developer/API consumer pays different pricing ranges according to volume of API calls and/or suite of services provided",
        "head":[
          {"name":"Head-tier charge per call ($/call):"},
          {"name":"Number of API calls per Head consumer:"}
        ],
        "tail":[
          {"name":"Bottom-tier charge per call ($/call):",},
          {"name":"Number of API calls per Head consumer:"}
        ]
      },
      {
        "name":"Transaction fee",
        "title":"Minimum transactions volume required per year ($)",
        "description":"Developer/API consumer pays a percentage of overall transaction volume paid or a flat fee for each transaction made by API (an initiation/flagfall fee is sometimes included)",
        "head":[
          {"name":"Commission rate as % of transaction volume for HEAD:"},
        /*   {"name":"Number of API calls per Head consumer:"} */
        ],
        "tail":[
          {"name":"Commission rate as % of transaction volume for LONG-TAIL:",},
          /* {"name":"Number of API calls per Head consumer:"} */
        ]
      }
      ]
    },
      {
        "name":"Incubator",
        "pricingModels":[
          {
        
            "name":"Freemium",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays nothing up to a predefined limit. Payment is only realised for usage on top of that limit. Often used in conjunction with Tiered or Unit-based pricing (after the freemium limit has been reached)",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
            {"name":"Long-tail-tier charge per call ($/call):"},
            {"name":"Number of API calls per Long-tail consumer:"}
            ]
          },
          {
            "name":"Premium (unspecified)",
            "title":"Minimum number of API consumers required per year",
            "description":"API provider notes that there is a cost for using the APIs, but details are not provided on the developer portal",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {"name":"Long-tail-tier charge per call ($/call):",},
              {"name":"Number of API calls per Long-tail consumer:",}
            ]
    
          },
          {
            "name":"Tiered",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays different pricing ranges according to volume of API calls and/or suite of services provided",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {"name":"Bottom-tier charge per call ($/call):",},
              {"name":"Number of API calls per Head consumer:"}
            ]
          },
          {
            "name":"Transaction fee",
            "title":"Minimum transaction volume required per year ($)",
            "description":"Developer/API consumer pays a percentage of overall transaction volume paid or a flat fee for each transaction made by API (an initiation/flagfall fee is sometimes included)",
            "head":[
              {"name":"Commission rate as % of transaction volume for HEAD:"},
            /*   {"name":"Number of API calls per Head consumer:"} */
            ],
            "tail":[
              {"name":"Commission rate as % of transaction volume for LONG-TAIL:",},
              /* {"name":"Number of API calls per Head consumer:"} */
            ]
          }
        ]
      },
      {
        "name":"Banking-as-a-service",
        "pricingModels":[
          {
            "name":"Premium (unspecified)",
            "title":"Minimum number of API consumers required per year",
            "description":"API provider notes that there is a cost for using the APIs, but details are not provided on the developer portal",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
              }
            ]
          },
          {
            "name":"Tiered",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays different pricing ranges according to volume of API calls and/or suite of services provided",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
              }
            ]
          },
          {
            "name":"Transaction fee",
            "title":"Minimum transaction volume required per year ($)",
            "description":"Developer/API consumer pays a percentage of overall transaction volume paid or a flat fee for each transaction made by API (an initiation/flagfall fee is sometimes included)",
            "head":[
              {"name":"Commission rate as % of transaction volume for HEAD:"},
     
            ],
            "tail":[
              {"name":"Commission rate as % of transaction volume for LONG-TAIL:",},
  
            ]
          },
          {
            "name":"Unit-based",
            "title":"Minimum transaction volume required per year ($)",
            "description":"Developer/API consumer pays for a specific number of units/API calls, often via subscription model where a set number of API calls can be made on a daily or monthly basis",
            "head":[
              {"name":"Annual subscription fee for HEAD($):"},
              {"name":"Number of connected account per API consumer:"}
            ],
            "tail":[
              {
                "name":"Annual subscription fee for LONG-TAIL ($):",
              },
    
              {
                "name":"Number of connected account per API Long-tail consumer:",
              }
            ]
          },
        ]
      },
      {
        "name":"Marketplace",
        "pricingModels":[
          {
            "name":"Cost per action (CPA)",
            "title":"Minimum number of transactions required per year",
            "description":"Developer/API consumer gets paid upon a specific end user action, for instance a purchase of a product (customer acquisition), or when an end user shares their contact details (lead generation)",
            "head":[
             { "name":"Flat fee per action ($)"}
            ]
          /*   "totalConsumerMarket":"Flat fee per action ($)" */
          },
          {
            "name":"Cost per click (CPC)",
            "title":"Minimum number of clicks required per year",
            "description":"Developer/API consumer gets paid when the end user clicks on a specific link",
            "head":[
              { "name":"Flat fee per click ($)"}
             ]

          },
          {
            "name":"Referral/Registration",
            "title":"Minimum number of clicks required per year",
            "description":"Developer/API consumer gets paid when an end customer referred on to API provider logs in or registers through the API",
            "head":[
              { "name":"Flat fee per click ($)"}
             ]
          },
          {
            "name":"Revenue share",
            "title":"Minimum transaction volume required per year ($)",
            "description":"Developer/API consumer gets paid a share of the overall transaction volume of a sale or transaction",
            "head":[
              { "name":"Commission rate as % of transaction volume:"}
             ]
          }
        ]
      },
      {
        "name":"Open APIs",
        "pricingModels":[
        {
          "name":"Freemium",
          "title":"Minimum number of API consumers required per year",
          "description":"Developer/API consumer pays nothing up to a predefined limit. Payment is only realised for usage on top of that limit. Often used in conjunction with Tiered or Unit-based pricing (after the freemium limit has been reached)",
          "head":[
            {"name":"Head-tier charge per call ($/call):"},
            {"name":"Number of API calls per Head consumer:"}
          ],
          "tail":[
            {
              "name":"Long-tail-tier charge per call ($/call):",
            },
  
            {
              "name":"Number of API calls per Long-tail consumer:",
            }
          ]
        },
        {
          "name":"Premium (unspecified)",
          "title":"Minimum number of API consumers required per year",
          "description":"API provider notes that there is a cost for using the APIs, but details are not provided on the developer portal",
          "head":[
            {"name":"Head-tier charge per call ($/call):"},
            {"name":"Number of API calls per Head consumer:"}
          ],
          "tail":[
            {
              "name":"Long-tail-tier charge per call ($/call):",
            },
  
            {
              "name":"Number of API calls per Long-tail consumer:",
            }
          ]
  
        },
        {
          "name":"Tiered",
          "title":"Minimum number of API consumers required per year",
          "description":"Developer/API consumer pays different pricing ranges according to volume of API calls and/or suite of services provided",
          "head":[
            {"name":"Head-tier charge per call ($/call):"},
            {"name":"Number of API calls per Head consumer:"}
          ],
          "tail":[
            {
              "name":"Long-tail-tier charge per call ($/call):",
            },
  
            {
              "name":"Number of API calls per Long-tail consumer:",
            }
          ]
        },
        {
          "name":"Pay as you go",
          "title":"Minimum number of API consumers required per year",
          "description":"Developer/API consumer pays for what is consumed - charged per API call made with no flagfall fee (no minimum consumption or commission)",
          "head":[
            {"name":"Head-tier charge per call ($/call):"},
            {"name":"Number of API calls per Head consumer:"}
          ],
          "tail":[
            {
              "name":"Long-tail-tier charge per call ($/call):",
            },
  
            {
              "name":"Number of API calls per Long-tail consumer:",
            }
          ]
        }
        ]
      },
      {
        "name":"Partner APIs",
        "pricingModels":[
          {
            "name":"Freemium",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays nothing up to a predefined limit. Payment is only realised for usage on top of that limit. Often used in conjunction with Tiered or Unit-based pricing (after the freemium limit has been reached)",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
              }
            ]
          },
          {
            "name":"Premium (unspecified)",
            "title":"Minimum number of API consumers required per year",
            "description":"API provider notes that there is a cost for using the APIs, but details are not provided on the developer portal",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
              }
            ]
    
          },
          {
            "name":"Tiered",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays different pricing ranges according to volume of API calls and/or suite of services provided",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
              }
            ]
          },
          {
            "name":"Pay as you go",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays for what is consumed - charged per API call made with no flagfall fee (no minimum consumption or commission)",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
              }
            ]
          }
          ]
      },
      {
        "name":"Premium",
        "pricingModels":[
          {
            "name":"Freemium",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays nothing up to a predefined limit. Payment is only realised for usage on top of that limit. Often used in conjunction with Tiered or Unit-based pricing (after the freemium limit has been reached)",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
              }
            ]
          },
          {
            "name":"Premium (unspecified)",
            "title":"Minimum number of API consumers required per year",
            "description":"API provider notes that there is a cost for using the APIs, but details are not provided on the developer portal",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
              }
            ]
    
          },
          {
            "name":"Tiered",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays different pricing ranges according to volume of API calls and/or suite of services provided",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
              }
            ]
          },
          {
            "name":"Pay as you go",
            "title":"Minimum number of API consumers required per year",
            "description":"Developer/API consumer pays for what is consumed - charged per API call made with no flagfall fee (no minimum consumption or commission)",
            "head":[
              {"name":"Head-tier charge per call ($/call):"},
              {"name":"Number of API calls per Head consumer:"}
            ],
            "tail":[
              {
                "name":"Long-tail-tier charge per call ($/call):",
              },
    
              {
                "name":"Number of API calls per Long-tail consumer:",
              }
            ]
          }
          ]
      },
  ]