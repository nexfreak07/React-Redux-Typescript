type ClassValue = string | Record<string, boolean> | undefined | null
 
export const classNames = (...args: ClassValue[]): string => {
    return args.flatMap((arg)=>{
        if(!arg) return []
        if(typeof arg === "string") return [arg]
        if(typeof arg === "object"){
            return Object.entries(arg).filter(([_,value])=> Boolean(value))
            .map(([key]) => key);
        }
        return []
    }).join(" ")
}



// 🛠 Step by Step Example
// Example Input
// classNames(
//   "btn",
//   styles.primary,
//   { [styles.disabled]: false, [styles.outline]: true },
//   null,
//   undefined,
//   "rounded"
// )

// Step 1 — args received
// [
//   "btn",
//   "Button_primary__abc123",
//   { "Button_disabled__def456": false, "Button_outline__ghi789": true },
//   null,
//   undefined,
//   "rounded"
// ]

// Step 2 — Each argument processed with flatMap

// "btn" → case 2 → returns ["btn"]

// "Button_primary__abc123" → case 2 → returns ["Button_primary__abc123"]

// { "Button_disabled__def456": false, "Button_outline__ghi789": true } → case 3

// Object.entries → [["Button_disabled__def456", false], ["Button_outline__ghi789", true]]

// filter → keep only true → [["Button_outline__ghi789", true]]

// map → → ["Button_outline__ghi789"]

// null / undefined → case 1 → ignored

// "rounded" → case 2 → returns ["rounded"]

// Step 3 — Flatten & Join

// Everything collected:

// ["btn", "Button_primary__abc123", "Button_outline__ghi789", "rounded"]


// Join with space:

// "btn Button_primary__abc123 Button_outline__ghi789 rounded"

// ✅ Final Output

// That string is what React puts inside className="".
// Your button in HTML looks like:

// <button class="btn Button_primary__abc123 Button_outline__ghi789 rounded">
//   Click me
// </button>


// 🔑 So the function’s job is:

// Take any mix of class strings, conditionals, null/undefined.

// Filter out the falsy ones.

// Flatten them into one clean string.