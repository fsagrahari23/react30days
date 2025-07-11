import React from "react";

const InlineEditable = () => {
  let initialData = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  const [data, setData] = React.useState(initialData);
  const [id, setId] = React.useState(null);
  const [editVal, setEditVal] = React.useState("");
  const currRef = React.useRef(null);

  React.useEffect(() => {
    if (id !== null && currRef.current) {
      currRef.current.focus();
    }
  }, [id]);

  const handleBlur = () => {
    if (id !== null) {
      saveChanges();
      setId(null);
    }
  };

  const saveChanges = () => {
    setData(
      data.map((item) => (item.id === id ? { ...item, name: editVal } : item))
    );
  };

  return (
    <div>
      <h1>Inline editable functionality</h1>
      <div>
        {data.map((item) =>
          id === item.id ? (
            <input
              key={item.id}
              ref={currRef}
              type="text"
              value={editVal}
              onBlur={handleBlur}
              onChange={(e) => setEditVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleBlur();
              }}
            />
          ) : (
            <div
              key={item.id}
              onClick={() => {
                setId(item.id);
                setEditVal(item.name);
              }}
              style={{
                padding: "10px",
                border: "1px solid black",
                margin: "5px 0",
                cursor: "pointer",
              }}
            >
              {item.name}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default InlineEditable;
