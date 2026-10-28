# `dataDatabricksAgentKitManagedMemoryEntries` Submodule <a name="`dataDatabricksAgentKitManagedMemoryEntries` Submodule" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAgentKitManagedMemoryEntries <a name="DataDatabricksAgentKitManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries databricks_agent_kit_managed_memory_entries}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

datadatabricksagentkitmanagedmemoryentries.NewDataDatabricksAgentKitManagedMemoryEntries(scope Construct, id *string, config DataDatabricksAgentKitManagedMemoryEntriesConfig) DataDatabricksAgentKitManagedMemoryEntries
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig">DataDatabricksAgentKitManagedMemoryEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig">DataDatabricksAgentKitManagedMemoryEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPathPrefix">ResetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetSessionId">ResetSessionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAgentKitManagedMemoryEntriesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetPathPrefix` <a name="ResetPathPrefix" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPathPrefix"></a>

```go
func ResetPathPrefix()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSessionId` <a name="ResetSessionId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetSessionId"></a>

```go
func ResetSessionId()
```

##### `ResetView` <a name="ResetView" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetView"></a>

```go
func ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryEntries resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

datadatabricksagentkitmanagedmemoryentries.DataDatabricksAgentKitManagedMemoryEntries_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

datadatabricksagentkitmanagedmemoryentries.DataDatabricksAgentKitManagedMemoryEntries_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

datadatabricksagentkitmanagedmemoryentries.DataDatabricksAgentKitManagedMemoryEntries_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

datadatabricksagentkitmanagedmemoryentries.DataDatabricksAgentKitManagedMemoryEntries_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryEntries resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAgentKitManagedMemoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAgentKitManagedMemoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAgentKitManagedMemoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.managedMemoryEntries">ManagedMemoryEntries</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorIdInput">ActorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefixInput">PathPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionIdInput">SessionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.viewInput">ViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorId">ActorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionId">SessionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.view">View</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ManagedMemoryEntries`<sup>Required</sup> <a name="ManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.managedMemoryEntries"></a>

```go
func ManagedMemoryEntries() DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorIdInput"></a>

```go
func ActorIdInput() *string
```

- *Type:* *string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PathPrefixInput`<sup>Optional</sup> <a name="PathPrefixInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefixInput"></a>

```go
func PathPrefixInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SessionIdInput`<sup>Optional</sup> <a name="SessionIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionIdInput"></a>

```go
func SessionIdInput() *string
```

- *Type:* *string

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.viewInput"></a>

```go
func ViewInput() *string
```

- *Type:* *string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorId"></a>

```go
func ActorId() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefix"></a>

```go
func PathPrefix() *string
```

- *Type:* *string

---

##### `SessionId`<sup>Required</sup> <a name="SessionId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionId"></a>

```go
func SessionId() *string
```

- *Type:* *string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.view"></a>

```go
func View() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAgentKitManagedMemoryEntriesConfig <a name="DataDatabricksAgentKitManagedMemoryEntriesConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

&datadatabricksagentkitmanagedmemoryentries.DataDatabricksAgentKitManagedMemoryEntriesConfig {
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
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig,
	SessionId: *string,
	View: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.actorId">ActorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#actor_id DataDatabricksAgentKitManagedMemoryEntries#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#parent DataDatabricksAgentKitManagedMemoryEntries#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#page_size DataDatabricksAgentKitManagedMemoryEntries#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#path_prefix DataDatabricksAgentKitManagedMemoryEntries#path_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.sessionId">SessionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#session_id DataDatabricksAgentKitManagedMemoryEntries#session_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.view">View</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#view DataDatabricksAgentKitManagedMemoryEntries#view}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.actorId"></a>

```go
ActorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#actor_id DataDatabricksAgentKitManagedMemoryEntries#actor_id}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#parent DataDatabricksAgentKitManagedMemoryEntries#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#page_size DataDatabricksAgentKitManagedMemoryEntries#page_size}.

---

##### `PathPrefix`<sup>Optional</sup> <a name="PathPrefix" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pathPrefix"></a>

```go
PathPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#path_prefix DataDatabricksAgentKitManagedMemoryEntries#path_prefix}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAgentKitManagedMemoryEntriesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}.

---

##### `SessionId`<sup>Optional</sup> <a name="SessionId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.sessionId"></a>

```go
SessionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#session_id DataDatabricksAgentKitManagedMemoryEntries#session_id}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.view"></a>

```go
View *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#view DataDatabricksAgentKitManagedMemoryEntries#view}.

---

### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

&datadatabricksagentkitmanagedmemoryentries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#name DataDatabricksAgentKitManagedMemoryEntries#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#name DataDatabricksAgentKitManagedMemoryEntries#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}.

---

### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

&datadatabricksagentkitmanagedmemoryentries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}.

---

### DataDatabricksAgentKitManagedMemoryEntriesProviderConfig <a name="DataDatabricksAgentKitManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

&datadatabricksagentkitmanagedmemoryentries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

datadatabricksagentkitmanagedmemoryentries.NewDataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.get"></a>

```go
func Get(index *f64) DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

datadatabricksagentkitmanagedmemoryentries.NewDataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId">ActorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId">SessionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId"></a>

```go
func ActorId() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `SessionId`<sup>Required</sup> <a name="SessionId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId"></a>

```go
func SessionId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries</a>

---


### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

datadatabricksagentkitmanagedmemoryentries.NewDataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentries"

datadatabricksagentkitmanagedmemoryentries.NewDataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



