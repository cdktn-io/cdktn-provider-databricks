# `dataDatabricksMasonManagedMemoryStore` Submodule <a name="`dataDatabricksMasonManagedMemoryStore` Submodule" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMasonManagedMemoryStore <a name="DataDatabricksMasonManagedMemoryStore" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store databricks_mason_managed_memory_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemorystore"

datadatabricksmasonmanagedmemorystore.NewDataDatabricksMasonManagedMemoryStore(scope Construct, id *string, config DataDatabricksMasonManagedMemoryStoreConfig) DataDatabricksMasonManagedMemoryStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig">DataDatabricksMasonManagedMemoryStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig">DataDatabricksMasonManagedMemoryStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksMasonManagedMemoryStoreProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemorystore"

datadatabricksmasonmanagedmemorystore.DataDatabricksMasonManagedMemoryStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemorystore"

datadatabricksmasonmanagedmemorystore.DataDatabricksMasonManagedMemoryStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemorystore"

datadatabricksmasonmanagedmemorystore.DataDatabricksMasonManagedMemoryStore_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemorystore"

datadatabricksmasonmanagedmemorystore.DataDatabricksMasonManagedMemoryStore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksMasonManagedMemoryStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksMasonManagedMemoryStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMasonManagedMemoryStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.creatorUserId">CreatorUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.ownerUserId">OwnerUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.storageBackend">StorageBackend</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CreatorUserId`<sup>Required</sup> <a name="CreatorUserId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.creatorUserId"></a>

```go
func CreatorUserId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `OwnerUserId`<sup>Required</sup> <a name="OwnerUserId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.ownerUserId"></a>

```go
func OwnerUserId() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference</a>

---

##### `StorageBackend`<sup>Required</sup> <a name="StorageBackend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.storageBackend"></a>

```go
func StorageBackend() DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.workspaceId"></a>

```go
func WorkspaceId() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMasonManagedMemoryStoreConfig <a name="DataDatabricksMasonManagedMemoryStoreConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemorystore"

&datadatabricksmasonmanagedmemorystore.DataDatabricksMasonManagedMemoryStoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#name DataDatabricksMasonManagedMemoryStore#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#provider_config DataDatabricksMasonManagedMemoryStore#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#name DataDatabricksMasonManagedMemoryStore#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksMasonManagedMemoryStoreProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#provider_config DataDatabricksMasonManagedMemoryStore#provider_config}.

---

### DataDatabricksMasonManagedMemoryStoreProviderConfig <a name="DataDatabricksMasonManagedMemoryStoreProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemorystore"

&datadatabricksmasonmanagedmemorystore.DataDatabricksMasonManagedMemoryStoreProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#workspace_id DataDatabricksMasonManagedMemoryStore#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#workspace_id DataDatabricksMasonManagedMemoryStore#workspace_id}.

---

### DataDatabricksMasonManagedMemoryStoreStorageBackend <a name="DataDatabricksMasonManagedMemoryStoreStorageBackend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemorystore"

&datadatabricksmasonmanagedmemorystore.DataDatabricksMasonManagedMemoryStoreStorageBackend {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemorystore"

datadatabricksmasonmanagedmemorystore.NewDataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference <a name="DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabricksmasonmanagedmemorystore"

datadatabricksmasonmanagedmemorystore.NewDataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendId">BackendId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendType">BackendType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend">DataDatabricksMasonManagedMemoryStoreStorageBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendId`<sup>Required</sup> <a name="BackendId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendId"></a>

```go
func BackendId() *string
```

- *Type:* *string

---

##### `BackendType`<sup>Required</sup> <a name="BackendType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendType"></a>

```go
func BackendType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksMasonManagedMemoryStoreStorageBackend
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend">DataDatabricksMasonManagedMemoryStoreStorageBackend</a>

---



