# `dataDatabricksAgentKitManagedMemoryEntry` Submodule <a name="`dataDatabricksAgentKitManagedMemoryEntry` Submodule" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAgentKitManagedMemoryEntry <a name="DataDatabricksAgentKitManagedMemoryEntry" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entry databricks_agent_kit_managed_memory_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentry"

datadatabricksagentkitmanagedmemoryentry.NewDataDatabricksAgentKitManagedMemoryEntry(scope Construct, id *string, config DataDatabricksAgentKitManagedMemoryEntryConfig) DataDatabricksAgentKitManagedMemoryEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig">DataDatabricksAgentKitManagedMemoryEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig">DataDatabricksAgentKitManagedMemoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAgentKitManagedMemoryEntryProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfig">DataDatabricksAgentKitManagedMemoryEntryProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentry"

datadatabricksagentkitmanagedmemoryentry.DataDatabricksAgentKitManagedMemoryEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentry"

datadatabricksagentkitmanagedmemoryentry.DataDatabricksAgentKitManagedMemoryEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentry"

datadatabricksagentkitmanagedmemoryentry.DataDatabricksAgentKitManagedMemoryEntry_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentry"

datadatabricksagentkitmanagedmemoryentry.DataDatabricksAgentKitManagedMemoryEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAgentKitManagedMemoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAgentKitManagedMemoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAgentKitManagedMemoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.actorId">ActorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.sessionId">SessionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.actorId"></a>

```go
func ActorId() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference</a>

---

##### `SessionId`<sup>Required</sup> <a name="SessionId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.sessionId"></a>

```go
func SessionId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAgentKitManagedMemoryEntryConfig <a name="DataDatabricksAgentKitManagedMemoryEntryConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentry"

&datadatabricksagentkitmanagedmemoryentry.DataDatabricksAgentKitManagedMemoryEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entry#name DataDatabricksAgentKitManagedMemoryEntry#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfig">DataDatabricksAgentKitManagedMemoryEntryProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entry#provider_config DataDatabricksAgentKitManagedMemoryEntry#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entry#name DataDatabricksAgentKitManagedMemoryEntry#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAgentKitManagedMemoryEntryProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfig">DataDatabricksAgentKitManagedMemoryEntryProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entry#provider_config DataDatabricksAgentKitManagedMemoryEntry#provider_config}.

---

### DataDatabricksAgentKitManagedMemoryEntryProviderConfig <a name="DataDatabricksAgentKitManagedMemoryEntryProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentry"

&datadatabricksagentkitmanagedmemoryentry.DataDatabricksAgentKitManagedMemoryEntryProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entry#workspace_id DataDatabricksAgentKitManagedMemoryEntry#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entry#workspace_id DataDatabricksAgentKitManagedMemoryEntry#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksagentkitmanagedmemoryentry"

datadatabricksagentkitmanagedmemoryentry.NewDataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntry.DataDatabricksAgentKitManagedMemoryEntryProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



