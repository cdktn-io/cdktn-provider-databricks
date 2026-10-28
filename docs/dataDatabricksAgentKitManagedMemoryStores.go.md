# `dataDatabricksAgentKitManagedMemoryStores` Submodule <a name="`dataDatabricksAgentKitManagedMemoryStores` Submodule" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAgentKitManagedMemoryStores <a name="DataDatabricksAgentKitManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores databricks_agent_kit_managed_memory_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

datadatabricksagentkitmanagedmemorystores.NewDataDatabricksAgentKitManagedMemoryStores(scope Construct, id *string, config DataDatabricksAgentKitManagedMemoryStoresConfig) DataDatabricksAgentKitManagedMemoryStores
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig">DataDatabricksAgentKitManagedMemoryStoresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig">DataDatabricksAgentKitManagedMemoryStoresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAgentKitManagedMemoryStoresProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryStores resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

datadatabricksagentkitmanagedmemorystores.DataDatabricksAgentKitManagedMemoryStores_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

datadatabricksagentkitmanagedmemorystores.DataDatabricksAgentKitManagedMemoryStores_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

datadatabricksagentkitmanagedmemorystores.DataDatabricksAgentKitManagedMemoryStores_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

datadatabricksagentkitmanagedmemorystores.DataDatabricksAgentKitManagedMemoryStores_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryStores resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAgentKitManagedMemoryStores to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAgentKitManagedMemoryStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAgentKitManagedMemoryStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.managedMemoryStores">ManagedMemoryStores</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ManagedMemoryStores`<sup>Required</sup> <a name="ManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.managedMemoryStores"></a>

```go
func ManagedMemoryStores() DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAgentKitManagedMemoryStoresConfig <a name="DataDatabricksAgentKitManagedMemoryStoresConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

&datadatabricksagentkitmanagedmemorystores.DataDatabricksAgentKitManagedMemoryStoresConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#page_size DataDatabricksAgentKitManagedMemoryStores#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#page_size DataDatabricksAgentKitManagedMemoryStores#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAgentKitManagedMemoryStoresProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}.

---

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

&datadatabricksagentkitmanagedmemorystores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#name DataDatabricksAgentKitManagedMemoryStores#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#name DataDatabricksAgentKitManagedMemoryStores#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}.

---

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

&datadatabricksagentkitmanagedmemorystores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}.

---

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

&datadatabricksagentkitmanagedmemorystores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend {

}
```


### DataDatabricksAgentKitManagedMemoryStoresProviderConfig <a name="DataDatabricksAgentKitManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

&datadatabricksagentkitmanagedmemorystores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

datadatabricksagentkitmanagedmemorystores.NewDataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.get"></a>

```go
func Get(index *f64) DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

datadatabricksagentkitmanagedmemorystores.NewDataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId">CreatorUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId">OwnerUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend">StorageBackend</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CreatorUserId`<sup>Required</sup> <a name="CreatorUserId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId"></a>

```go
func CreatorUserId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `OwnerUserId`<sup>Required</sup> <a name="OwnerUserId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId"></a>

```go
func OwnerUserId() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `StorageBackend`<sup>Required</sup> <a name="StorageBackend" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend"></a>

```go
func StorageBackend() DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores</a>

---


### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

datadatabricksagentkitmanagedmemorystores.NewDataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

datadatabricksagentkitmanagedmemorystores.NewDataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId">BackendId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType">BackendType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendId`<sup>Required</sup> <a name="BackendId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId"></a>

```go
func BackendId() *string
```

- *Type:* *string

---

##### `BackendType`<sup>Required</sup> <a name="BackendType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType"></a>

```go
func BackendType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend</a>

---


### DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemorystores"

datadatabricksagentkitmanagedmemorystores.NewDataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



