# `dataDatabricksMasonManagedMemoryEntries` Submodule <a name="`dataDatabricksMasonManagedMemoryEntries` Submodule" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMasonManagedMemoryEntries <a name="DataDatabricksMasonManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries databricks_mason_managed_memory_entries}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

datadatabricksmasonmanagedmemoryentries.NewDataDatabricksMasonManagedMemoryEntries(scope Construct, id *string, config DataDatabricksMasonManagedMemoryEntriesConfig) DataDatabricksMasonManagedMemoryEntries
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig">DataDatabricksMasonManagedMemoryEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig">DataDatabricksMasonManagedMemoryEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPathPrefix">ResetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetReadMask">ResetReadMask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetSessionId">ResetSessionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksMasonManagedMemoryEntriesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetPathPrefix` <a name="ResetPathPrefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPathPrefix"></a>

```go
func ResetPathPrefix()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetReadMask` <a name="ResetReadMask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetReadMask"></a>

```go
func ResetReadMask()
```

##### `ResetSessionId` <a name="ResetSessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetSessionId"></a>

```go
func ResetSessionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryEntries resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

datadatabricksmasonmanagedmemoryentries.DataDatabricksMasonManagedMemoryEntries_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

datadatabricksmasonmanagedmemoryentries.DataDatabricksMasonManagedMemoryEntries_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

datadatabricksmasonmanagedmemoryentries.DataDatabricksMasonManagedMemoryEntries_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

datadatabricksmasonmanagedmemoryentries.DataDatabricksMasonManagedMemoryEntries_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryEntries resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksMasonManagedMemoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksMasonManagedMemoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMasonManagedMemoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.managedMemoryEntries">ManagedMemoryEntries</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorIdInput">ActorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefixInput">PathPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMaskInput">ReadMaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionIdInput">SessionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorId">ActorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMask">ReadMask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionId">SessionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ManagedMemoryEntries`<sup>Required</sup> <a name="ManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.managedMemoryEntries"></a>

```go
func ManagedMemoryEntries() DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorIdInput"></a>

```go
func ActorIdInput() *string
```

- *Type:* *string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PathPrefixInput`<sup>Optional</sup> <a name="PathPrefixInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefixInput"></a>

```go
func PathPrefixInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ReadMaskInput`<sup>Optional</sup> <a name="ReadMaskInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMaskInput"></a>

```go
func ReadMaskInput() *string
```

- *Type:* *string

---

##### `SessionIdInput`<sup>Optional</sup> <a name="SessionIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionIdInput"></a>

```go
func SessionIdInput() *string
```

- *Type:* *string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorId"></a>

```go
func ActorId() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefix"></a>

```go
func PathPrefix() *string
```

- *Type:* *string

---

##### `ReadMask`<sup>Required</sup> <a name="ReadMask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMask"></a>

```go
func ReadMask() *string
```

- *Type:* *string

---

##### `SessionId`<sup>Required</sup> <a name="SessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionId"></a>

```go
func SessionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMasonManagedMemoryEntriesConfig <a name="DataDatabricksMasonManagedMemoryEntriesConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

&datadatabricksmasonmanagedmemoryentries.DataDatabricksMasonManagedMemoryEntriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ActorId: *string,
	Parent: *string,
	PageSize: *f64,
	PathPrefix: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig,
	ReadMask: *string,
	SessionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.actorId">ActorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.readMask">ReadMask</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.sessionId">SessionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.actorId"></a>

```go
ActorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}.

---

##### `PathPrefix`<sup>Optional</sup> <a name="PathPrefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pathPrefix"></a>

```go
PathPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksMasonManagedMemoryEntriesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}.

---

##### `ReadMask`<sup>Optional</sup> <a name="ReadMask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.readMask"></a>

```go
ReadMask *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}.

---

##### `SessionId`<sup>Optional</sup> <a name="SessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.sessionId"></a>

```go
SessionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}.

---

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

&datadatabricksmasonmanagedmemoryentries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#name DataDatabricksMasonManagedMemoryEntries#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#name DataDatabricksMasonManagedMemoryEntries#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}.

---

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

&datadatabricksmasonmanagedmemoryentries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}.

---

### DataDatabricksMasonManagedMemoryEntriesProviderConfig <a name="DataDatabricksMasonManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

&datadatabricksmasonmanagedmemoryentries.DataDatabricksMasonManagedMemoryEntriesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

datadatabricksmasonmanagedmemoryentries.NewDataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get"></a>

```go
func Get(index *f64) DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

datadatabricksmasonmanagedmemoryentries.NewDataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId">ActorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId">SessionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId"></a>

```go
func ActorId() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `SessionId`<sup>Required</sup> <a name="SessionId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId"></a>

```go
func SessionId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a>

---


### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

datadatabricksmasonmanagedmemoryentries.NewDataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemoryentries"

datadatabricksmasonmanagedmemoryentries.NewDataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



