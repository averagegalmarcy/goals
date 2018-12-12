select 
  profile_id,
  MIN(end_date - start_date) as mindiff,
  MAX(end_date - start_date) as maxdiff,
  CAST(AVG(end_date - start_date) as int) as average,
  count(goal_table.id) as "count"
from goal_table
group by profile_id;
