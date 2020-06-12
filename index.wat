(module
 (type $i32_=>_f64 (func (param i32) (result f64)))
 (memory $0 0)
 (export "memory" (memory $0))
 (export "squares" (func $assembly/index/squares))
 (export "squares4" (func $assembly/index/squares4))
 (func $assembly/index/squares (param $0 i32) (result f64)
  (local $1 i64)
  (local $2 i64)
  local.get $0
  i64.extend_i32_u
  i64.const -1569712520837898937
  i64.mul
  local.tee $2
  local.get $2
  local.get $2
  i64.mul
  i64.add
  local.tee $1
  i64.const 32
  i64.shr_u
  local.get $1
  i64.const 32
  i64.shl
  i64.or
  local.tee $1
  local.get $1
  i64.mul
  local.get $2
  i64.const -1569712520837898937
  i64.add
  i64.add
  local.tee $1
  i64.const 32
  i64.shr_u
  local.get $1
  i64.const 32
  i64.shl
  i64.or
  local.tee $1
  local.get $1
  i64.mul
  local.get $2
  i64.add
  i64.const 32
  i64.shr_u
  f64.convert_i64_u
 )
 (func $assembly/index/squares4 (param $0 i32) (result f64)
  (local $1 i64)
  (local $2 i64)
  local.get $0
  i64.extend_i32_u
  i64.const -1569712520837898937
  i64.mul
  local.tee $2
  local.get $2
  local.get $2
  i64.mul
  i64.add
  local.set $1
  local.get $2
  local.get $2
  i64.const -1569712520837898937
  i64.add
  local.tee $2
  local.get $1
  i64.const 32
  i64.shl
  local.get $1
  i64.const 32
  i64.shr_u
  i64.or
  local.tee $1
  local.get $1
  i64.mul
  i64.add
  local.tee $1
  i64.const 32
  i64.shr_u
  local.get $1
  i64.const 32
  i64.shl
  i64.or
  local.tee $1
  local.get $1
  i64.mul
  i64.add
  local.tee $1
  i64.const 32
  i64.shr_u
  local.get $1
  i64.const 32
  i64.shl
  i64.or
  local.tee $1
  local.get $1
  i64.mul
  local.get $2
  i64.add
  i64.const 32
  i64.shr_u
  f64.convert_i64_u
 )
)
