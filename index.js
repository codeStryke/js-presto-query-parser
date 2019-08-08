
const antlr4 = require('antlr4/index');
const SqlBaseLexer = require('./lib/SqlBaseLexer.js');
const SqlBaseParser = require('./lib/SqlBaseParser.js');

const test = 'SELELCT * FROM table_name;';

const stream = new antlr4.CharStreams.fromString(test);
const lexer = new SqlBaseLexer.SqlBaseLexer(stream);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new SqlBaseParser.SqlBaseParser(tokens);
parser.buildParseTrees = true;
const tree = parser.singleStatement();

console.log(tree.toStringTree(parser.ruleNames));



// const test = `SELECT
// s.account_id,
// s.signup_date,
// p1.subscrn_period_start_date AS p1_free_start_date,
// p1.subscrn_period_end_date AS p1_free_end_date,
// (
//   CASE
//     WHEN ad.account_id IS NOT NULL THEN 'Yes'
//     ELSE 'No'
//   END
// ) AS has_service_in_p3
// FROM
// dse.subscrn_d AS s
// INNER JOIN dse.subscrn_period_d AS p1 ON s.account_id = p1.account_id
// AND s.subscrn_id = p1.subscrn_id
// AND p1.subscrn_period_nbr = 1
// LEFT OUTER JOIN dse.subscrn_period_d AS p3 ON s.account_id = p3.account_id
// AND s.subscrn_id = p3.subscrn_id
// AND p3.subscrn_period_nbr = 3
// LEFT OUTER JOIN dse.account_day_d AS ad ON s.account_id = ad.account_id
// AND p3.subscrn_period_start_date = ad.snapshot_date
// AND ad.can_stream = 1
// WHERE
// 1 = 1
// AND s.signup_date BETWEEN 20170401
// AND 20170630
// AND s.is_free_trial_at_signup = 1
// AND s.is_tester = 0`;