CREATE TABLE user_orders (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    order_specs TEXT NOT NULL,
    theme TEXT,
    notes TEXT,
    readyDate DATE,
    cost MONEY NOT NULL,
    completed BOOLEAN(false)
);


