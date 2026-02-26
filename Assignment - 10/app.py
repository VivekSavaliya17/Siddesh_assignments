from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route("/")
def dashboard():

    data = {
    "order_id":[101,102,103,104,105,106,107,108],
    "date":[
        "2025-01-03","2025-01-10",
        "2025-02-05","2025-02-18",
        "2025-03-02","2025-03-15",
        "2025-03-25","2025-04-07"
    ],
    "product":[
        "Rice","Milk","Sugar","Bread",
        "Oil","Milk","Eggs","Rice"
    ],
    "price":[60,50,45,40,120,50,70,60],
    "quantity":[2,3,1,2,1,2,1,1]
    }
    
    df = pd.DataFrame(data)
    df["date"] = pd.to_datetime(df["date"])
    df["total"] = df["price"] * df["quantity"]

    total_sales = int(df["total"].sum())
    total_orders = int(df["order_id"].nunique())
    top_products = df.groupby("product")["quantity"].sum().to_dict()

    return render_template(
        "dashboard.html",
        sales=total_sales,
        orders=total_orders,
        products=top_products
    )

if __name__ == "__main__":
    app.run(debug=True)