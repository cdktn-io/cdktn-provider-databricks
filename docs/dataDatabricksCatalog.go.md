# `dataDatabricksCatalog` Submodule <a name="`dataDatabricksCatalog` Submodule" id="@cdktn/provider-databricks.dataDatabricksCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCatalog <a name="DataDatabricksCatalog" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog databricks_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

datadatabrickscatalog.NewDataDatabricksCatalog(scope Construct, id *string, config DataDatabricksCatalogConfig) DataDatabricksCatalog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig">DataDatabricksCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig">DataDatabricksCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo">PutCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetCatalogInfo">ResetCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCatalogInfo` <a name="PutCatalogInfo" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo"></a>

```go
func PutCatalogInfo(value DataDatabricksCatalogCatalogInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksCatalogProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig">DataDatabricksCatalogProviderConfig</a>

---

##### `ResetCatalogInfo` <a name="ResetCatalogInfo" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetCatalogInfo"></a>

```go
func ResetCatalogInfo()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

datadatabrickscatalog.DataDatabricksCatalog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

datadatabrickscatalog.DataDatabricksCatalog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

datadatabrickscatalog.DataDatabricksCatalog_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

datadatabrickscatalog.DataDatabricksCatalog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfo">CatalogInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference">DataDatabricksCatalogCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference">DataDatabricksCatalogProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfoInput">CatalogInfoInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig">DataDatabricksCatalogProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CatalogInfo`<sup>Required</sup> <a name="CatalogInfo" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfo"></a>

```go
func CatalogInfo() DataDatabricksCatalogCatalogInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference">DataDatabricksCatalogCatalogInfoOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksCatalogProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference">DataDatabricksCatalogProviderConfigOutputReference</a>

---

##### `CatalogInfoInput`<sup>Optional</sup> <a name="CatalogInfoInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfoInput"></a>

```go
func CatalogInfoInput() DataDatabricksCatalogCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.providerConfigInput"></a>

```go
func ProviderConfigInput() DataDatabricksCatalogProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig">DataDatabricksCatalogProviderConfig</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCatalogCatalogInfo <a name="DataDatabricksCatalogCatalogInfo" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

&datadatabrickscatalog.DataDatabricksCatalogCatalogInfo {
	BrowseOnly: interface{},
	CatalogType: *string,
	Comment: *string,
	ConnectionName: *string,
	CreatedAt: *f64,
	CreatedBy: *string,
	EffectivePredictiveOptimizationFlag: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag,
	EnablePredictiveOptimization: *string,
	FullName: *string,
	IsolationMode: *string,
	MetastoreId: *string,
	Name: *string,
	Options: *map[string]*string,
	Owner: *string,
	Properties: *map[string]*string,
	ProviderName: *string,
	ProvisioningInfo: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo,
	SecurableType: *string,
	ShareName: *string,
	StorageLocation: *string,
	StorageRoot: *string,
	UpdatedAt: *f64,
	UpdatedBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#browse_only DataDatabricksCatalog#browse_only}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.catalogType">CatalogType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#catalog_type DataDatabricksCatalog#catalog_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#comment DataDatabricksCatalog#comment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#connection_name DataDatabricksCatalog#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#created_at DataDatabricksCatalog#created_at}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#created_by DataDatabricksCatalog#created_by}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#enable_predictive_optimization DataDatabricksCatalog#enable_predictive_optimization}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#full_name DataDatabricksCatalog#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.isolationMode">IsolationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#isolation_mode DataDatabricksCatalog#isolation_mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#metastore_id DataDatabricksCatalog#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.options">Options</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#options DataDatabricksCatalog#options}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#owner DataDatabricksCatalog#owner}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#properties DataDatabricksCatalog#properties}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#provider_name DataDatabricksCatalog#provider_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.provisioningInfo">ProvisioningInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | provisioning_info block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableType">SecurableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#securable_type DataDatabricksCatalog#securable_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.shareName">ShareName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#share_name DataDatabricksCatalog#share_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#storage_location DataDatabricksCatalog#storage_location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#storage_root DataDatabricksCatalog#storage_root}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#updated_at DataDatabricksCatalog#updated_at}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#updated_by DataDatabricksCatalog#updated_by}. |

---

##### `BrowseOnly`<sup>Optional</sup> <a name="BrowseOnly" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.browseOnly"></a>

```go
BrowseOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#browse_only DataDatabricksCatalog#browse_only}.

---

##### `CatalogType`<sup>Optional</sup> <a name="CatalogType" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.catalogType"></a>

```go
CatalogType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#catalog_type DataDatabricksCatalog#catalog_type}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#comment DataDatabricksCatalog#comment}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#connection_name DataDatabricksCatalog#connection_name}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdAt"></a>

```go
CreatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#created_at DataDatabricksCatalog#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#created_by DataDatabricksCatalog#created_by}.

---

##### `EffectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.effectivePredictiveOptimizationFlag"></a>

```go
EffectivePredictiveOptimizationFlag DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#effective_predictive_optimization_flag DataDatabricksCatalog#effective_predictive_optimization_flag}

---

##### `EnablePredictiveOptimization`<sup>Optional</sup> <a name="EnablePredictiveOptimization" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.enablePredictiveOptimization"></a>

```go
EnablePredictiveOptimization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#enable_predictive_optimization DataDatabricksCatalog#enable_predictive_optimization}.

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#full_name DataDatabricksCatalog#full_name}.

---

##### `IsolationMode`<sup>Optional</sup> <a name="IsolationMode" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.isolationMode"></a>

```go
IsolationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#isolation_mode DataDatabricksCatalog#isolation_mode}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.metastoreId"></a>

```go
MetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#metastore_id DataDatabricksCatalog#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#options DataDatabricksCatalog#options}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#owner DataDatabricksCatalog#owner}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#properties DataDatabricksCatalog#properties}.

---

##### `ProviderName`<sup>Optional</sup> <a name="ProviderName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#provider_name DataDatabricksCatalog#provider_name}.

---

##### `ProvisioningInfo`<sup>Optional</sup> <a name="ProvisioningInfo" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.provisioningInfo"></a>

```go
ProvisioningInfo DataDatabricksCatalogCatalogInfoProvisioningInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

provisioning_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#provisioning_info DataDatabricksCatalog#provisioning_info}

---

##### `SecurableType`<sup>Optional</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableType"></a>

```go
SecurableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#securable_type DataDatabricksCatalog#securable_type}.

---

##### `ShareName`<sup>Optional</sup> <a name="ShareName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.shareName"></a>

```go
ShareName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#share_name DataDatabricksCatalog#share_name}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageLocation"></a>

```go
StorageLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#storage_location DataDatabricksCatalog#storage_location}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageRoot"></a>

```go
StorageRoot *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#storage_root DataDatabricksCatalog#storage_root}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedAt"></a>

```go
UpdatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#updated_at DataDatabricksCatalog#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedBy"></a>

```go
UpdatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#updated_by DataDatabricksCatalog#updated_by}.

---

### DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag <a name="DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

&datadatabrickscatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag {
	Value: *string,
	InheritedFromName: *string,
	InheritedFromType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#value DataDatabricksCatalog#value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName">InheritedFromName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#inherited_from_name DataDatabricksCatalog#inherited_from_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType">InheritedFromType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#inherited_from_type DataDatabricksCatalog#inherited_from_type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#value DataDatabricksCatalog#value}.

---

##### `InheritedFromName`<sup>Optional</sup> <a name="InheritedFromName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```go
InheritedFromName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#inherited_from_name DataDatabricksCatalog#inherited_from_name}.

---

##### `InheritedFromType`<sup>Optional</sup> <a name="InheritedFromType" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```go
InheritedFromType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#inherited_from_type DataDatabricksCatalog#inherited_from_type}.

---

### DataDatabricksCatalogCatalogInfoProvisioningInfo <a name="DataDatabricksCatalogCatalogInfoProvisioningInfo" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

&datadatabrickscatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo {
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#state DataDatabricksCatalog#state}. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#state DataDatabricksCatalog#state}.

---

### DataDatabricksCatalogConfig <a name="DataDatabricksCatalogConfig" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

&datadatabrickscatalog.DataDatabricksCatalogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CatalogInfo: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo,
	Id: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.catalogInfo">CatalogInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | catalog_info block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#id DataDatabricksCatalog#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig">DataDatabricksCatalogProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}.

---

##### `CatalogInfo`<sup>Optional</sup> <a name="CatalogInfo" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.catalogInfo"></a>

```go
CatalogInfo DataDatabricksCatalogCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#catalog_info DataDatabricksCatalog#catalog_info}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#id DataDatabricksCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksCatalogProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig">DataDatabricksCatalogProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#provider_config DataDatabricksCatalog#provider_config}

---

### DataDatabricksCatalogProviderConfig <a name="DataDatabricksCatalogProviderConfig" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

&datadatabrickscatalog.DataDatabricksCatalogProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#workspace_id DataDatabricksCatalog#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/catalog#workspace_id DataDatabricksCatalog#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference <a name="DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

datadatabrickscatalog.NewDataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">ResetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">ResetInheritedFromType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInheritedFromName` <a name="ResetInheritedFromName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```go
func ResetInheritedFromName()
```

##### `ResetInheritedFromType` <a name="ResetInheritedFromType" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```go
func ResetInheritedFromType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">InheritedFromNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">InheritedFromTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">InheritedFromName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">InheritedFromType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InheritedFromNameInput`<sup>Optional</sup> <a name="InheritedFromNameInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```go
func InheritedFromNameInput() *string
```

- *Type:* *string

---

##### `InheritedFromTypeInput`<sup>Optional</sup> <a name="InheritedFromTypeInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```go
func InheritedFromTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `InheritedFromName`<sup>Required</sup> <a name="InheritedFromName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```go
func InheritedFromName() *string
```

- *Type:* *string

---

##### `InheritedFromType`<sup>Required</sup> <a name="InheritedFromType" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```go
func InheritedFromType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

---


### DataDatabricksCatalogCatalogInfoOutputReference <a name="DataDatabricksCatalogCatalogInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

datadatabrickscatalog.NewDataDatabricksCatalogCatalogInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCatalogCatalogInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag">PutEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo">PutProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetBrowseOnly">ResetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCatalogType">ResetCatalogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEffectivePredictiveOptimizationFlag">ResetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEnablePredictiveOptimization">ResetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetIsolationMode">ResetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProviderName">ResetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProvisioningInfo">ResetProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableType">ResetSecurableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetShareName">ResetShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEffectivePredictiveOptimizationFlag` <a name="PutEffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag"></a>

```go
func PutEffectivePredictiveOptimizationFlag(value DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

---

##### `PutProvisioningInfo` <a name="PutProvisioningInfo" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo"></a>

```go
func PutProvisioningInfo(value DataDatabricksCatalogCatalogInfoProvisioningInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

---

##### `ResetBrowseOnly` <a name="ResetBrowseOnly" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetBrowseOnly"></a>

```go
func ResetBrowseOnly()
```

##### `ResetCatalogType` <a name="ResetCatalogType" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCatalogType"></a>

```go
func ResetCatalogType()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetEffectivePredictiveOptimizationFlag` <a name="ResetEffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEffectivePredictiveOptimizationFlag"></a>

```go
func ResetEffectivePredictiveOptimizationFlag()
```

##### `ResetEnablePredictiveOptimization` <a name="ResetEnablePredictiveOptimization" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEnablePredictiveOptimization"></a>

```go
func ResetEnablePredictiveOptimization()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetFullName"></a>

```go
func ResetFullName()
```

##### `ResetIsolationMode` <a name="ResetIsolationMode" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetIsolationMode"></a>

```go
func ResetIsolationMode()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetMetastoreId"></a>

```go
func ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetProviderName` <a name="ResetProviderName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProviderName"></a>

```go
func ResetProviderName()
```

##### `ResetProvisioningInfo` <a name="ResetProvisioningInfo" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProvisioningInfo"></a>

```go
func ResetProvisioningInfo()
```

##### `ResetSecurableType` <a name="ResetSecurableType" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableType"></a>

```go
func ResetSecurableType()
```

##### `ResetShareName` <a name="ResetShareName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetShareName"></a>

```go
func ResetShareName()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageLocation"></a>

```go
func ResetStorageLocation()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageRoot"></a>

```go
func ResetStorageRoot()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedAt"></a>

```go
func ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedBy"></a>

```go
func ResetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfo">ProvisioningInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference">DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnlyInput">BrowseOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogTypeInput">CatalogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlagInput">EffectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimizationInput">EnablePredictiveOptimizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationModeInput">IsolationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfoInput">ProvisioningInfoInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocationInput">StorageLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRootInput">StorageRootInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogType">CatalogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationMode">IsolationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableType">SecurableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareName">ShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlag"></a>

```go
func EffectivePredictiveOptimizationFlag() DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `ProvisioningInfo`<sup>Required</sup> <a name="ProvisioningInfo" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfo"></a>

```go
func ProvisioningInfo() DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference">DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference</a>

---

##### `BrowseOnlyInput`<sup>Optional</sup> <a name="BrowseOnlyInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnlyInput"></a>

```go
func BrowseOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogTypeInput`<sup>Optional</sup> <a name="CatalogTypeInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogTypeInput"></a>

```go
func CatalogTypeInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAtInput"></a>

```go
func CreatedAtInput() *f64
```

- *Type:* *f64

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `EffectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlagInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlagInput"></a>

```go
func EffectivePredictiveOptimizationFlagInput() DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

---

##### `EnablePredictiveOptimizationInput`<sup>Optional</sup> <a name="EnablePredictiveOptimizationInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimizationInput"></a>

```go
func EnablePredictiveOptimizationInput() *string
```

- *Type:* *string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `IsolationModeInput`<sup>Optional</sup> <a name="IsolationModeInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationModeInput"></a>

```go
func IsolationModeInput() *string
```

- *Type:* *string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreIdInput"></a>

```go
func MetastoreIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `ProvisioningInfoInput`<sup>Optional</sup> <a name="ProvisioningInfoInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfoInput"></a>

```go
func ProvisioningInfoInput() DataDatabricksCatalogCatalogInfoProvisioningInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableTypeInput"></a>

```go
func SecurableTypeInput() *string
```

- *Type:* *string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareNameInput"></a>

```go
func ShareNameInput() *string
```

- *Type:* *string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocationInput"></a>

```go
func StorageLocationInput() *string
```

- *Type:* *string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRootInput"></a>

```go
func StorageRootInput() *string
```

- *Type:* *string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAtInput"></a>

```go
func UpdatedAtInput() *f64
```

- *Type:* *f64

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedByInput"></a>

```go
func UpdatedByInput() *string
```

- *Type:* *string

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnly"></a>

```go
func BrowseOnly() interface{}
```

- *Type:* interface{}

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogType"></a>

```go
func CatalogType() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `EnablePredictiveOptimization`<sup>Required</sup> <a name="EnablePredictiveOptimization" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimization"></a>

```go
func EnablePredictiveOptimization() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `IsolationMode`<sup>Required</sup> <a name="IsolationMode" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationMode"></a>

```go
func IsolationMode() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableType"></a>

```go
func SecurableType() *string
```

- *Type:* *string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareName"></a>

```go
func ShareName() *string
```

- *Type:* *string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocation"></a>

```go
func StorageLocation() *string
```

- *Type:* *string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRoot"></a>

```go
func StorageRoot() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCatalogCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

---


### DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference <a name="DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

datadatabrickscatalog.NewDataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCatalogCatalogInfoProvisioningInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

---


### DataDatabricksCatalogProviderConfigOutputReference <a name="DataDatabricksCatalogProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/datadatabrickscatalog"

datadatabrickscatalog.NewDataDatabricksCatalogProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCatalogProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig">DataDatabricksCatalogProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCatalogProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogProviderConfig">DataDatabricksCatalogProviderConfig</a>

---



