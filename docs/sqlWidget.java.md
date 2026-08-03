# `sqlWidget` Submodule <a name="`sqlWidget` Submodule" id="@cdktn/provider-databricks.sqlWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlWidget <a name="SqlWidget" id="@cdktn/provider-databricks.sqlWidget.SqlWidget"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget databricks_sql_widget}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidget;

SqlWidget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dashboardId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .parameter(IResolvable|java.util.List<SqlWidgetParameter>)
//  .position(SqlWidgetPosition)
//  .providerConfig(SqlWidgetProviderConfig)
//  .text(java.lang.String)
//  .title(java.lang.String)
//  .visualizationId(java.lang.String)
//  .widgetId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#description SqlWidget#description}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#id SqlWidget#id}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.parameter">parameter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>></code> | parameter block. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.position">position</a></code> | <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | position block. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig">SqlWidgetProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.text">text</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#text SqlWidget#text}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.visualizationId">visualizationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.widgetId">widgetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#widget_id SqlWidget#widget_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.dashboardId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#description SqlWidget#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#id SqlWidget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.parameter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#parameter SqlWidget#parameter}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.position"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

position block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#position SqlWidget#position}

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig">SqlWidgetProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#provider_config SqlWidget#provider_config}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.text"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#text SqlWidget#text}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `visualizationId`<sup>Optional</sup> <a name="visualizationId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.visualizationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}.

---

##### `widgetId`<sup>Optional</sup> <a name="widgetId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.widgetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#widget_id SqlWidget#widget_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.putPosition">putPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.resetVisualizationId">resetVisualizationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.resetWidgetId">resetWidgetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameter` <a name="putParameter" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.putParameter"></a>

```java
public void putParameter(IResolvable|java.util.List<SqlWidgetParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.putParameter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>>

---

##### `putPosition` <a name="putPosition" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.putPosition"></a>

```java
public void putPosition(SqlWidgetPosition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.putPosition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.putProviderConfig"></a>

```java
public void putProviderConfig(SqlWidgetProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig">SqlWidgetProviderConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.resetId"></a>

```java
public void resetId()
```

##### `resetParameter` <a name="resetParameter" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.resetParameter"></a>

```java
public void resetParameter()
```

##### `resetPosition` <a name="resetPosition" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.resetText"></a>

```java
public void resetText()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetVisualizationId` <a name="resetVisualizationId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.resetVisualizationId"></a>

```java
public void resetVisualizationId()
```

##### `resetWidgetId` <a name="resetWidgetId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.resetWidgetId"></a>

```java
public void resetWidgetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SqlWidget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.isConstruct"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidget;

SqlWidget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.isTerraformElement"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidget;

SqlWidget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.isTerraformResource"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidget;

SqlWidget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidget;

SqlWidget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqlWidget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SqlWidget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqlWidget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqlWidget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SqlWidget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.parameter">parameter</a></code> | <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList">SqlWidgetParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.position">position</a></code> | <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference">SqlWidgetPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference">SqlWidgetProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.dashboardIdInput">dashboardIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.parameterInput">parameterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.positionInput">positionInput</a></code> | <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig">SqlWidgetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.visualizationIdInput">visualizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.widgetIdInput">widgetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.visualizationId">visualizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.widgetId">widgetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.parameter"></a>

```java
public SqlWidgetParameterList getParameter();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList">SqlWidgetParameterList</a>

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.position"></a>

```java
public SqlWidgetPositionOutputReference getPosition();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference">SqlWidgetPositionOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.providerConfig"></a>

```java
public SqlWidgetProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference">SqlWidgetProviderConfigOutputReference</a>

---

##### `dashboardIdInput`<sup>Optional</sup> <a name="dashboardIdInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.dashboardIdInput"></a>

```java
public java.lang.String getDashboardIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.parameterInput"></a>

```java
public IResolvable|java.util.List<SqlWidgetParameter> getParameterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>>

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.positionInput"></a>

```java
public SqlWidgetPosition getPositionInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.providerConfigInput"></a>

```java
public SqlWidgetProviderConfig getProviderConfigInput();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig">SqlWidgetProviderConfig</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `visualizationIdInput`<sup>Optional</sup> <a name="visualizationIdInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.visualizationIdInput"></a>

```java
public java.lang.String getVisualizationIdInput();
```

- *Type:* java.lang.String

---

##### `widgetIdInput`<sup>Optional</sup> <a name="widgetIdInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.widgetIdInput"></a>

```java
public java.lang.String getWidgetIdInput();
```

- *Type:* java.lang.String

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `visualizationId`<sup>Required</sup> <a name="visualizationId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.visualizationId"></a>

```java
public java.lang.String getVisualizationId();
```

- *Type:* java.lang.String

---

##### `widgetId`<sup>Required</sup> <a name="widgetId" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.widgetId"></a>

```java
public java.lang.String getWidgetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.sqlWidget.SqlWidget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlWidgetConfig <a name="SqlWidgetConfig" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidgetConfig;

SqlWidgetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dashboardId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .parameter(IResolvable|java.util.List<SqlWidgetParameter>)
//  .position(SqlWidgetPosition)
//  .providerConfig(SqlWidgetProviderConfig)
//  .text(java.lang.String)
//  .title(java.lang.String)
//  .visualizationId(java.lang.String)
//  .widgetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#description SqlWidget#description}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#id SqlWidget#id}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.parameter">parameter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>></code> | parameter block. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.position">position</a></code> | <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | position block. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig">SqlWidgetProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.text">text</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#text SqlWidget#text}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.visualizationId">visualizationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.widgetId">widgetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#widget_id SqlWidget#widget_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#description SqlWidget#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#id SqlWidget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.parameter"></a>

```java
public IResolvable|java.util.List<SqlWidgetParameter> getParameter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#parameter SqlWidget#parameter}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.position"></a>

```java
public SqlWidgetPosition getPosition();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

position block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#position SqlWidget#position}

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.providerConfig"></a>

```java
public SqlWidgetProviderConfig getProviderConfig();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig">SqlWidgetProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#provider_config SqlWidget#provider_config}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#text SqlWidget#text}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `visualizationId`<sup>Optional</sup> <a name="visualizationId" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.visualizationId"></a>

```java
public java.lang.String getVisualizationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}.

---

##### `widgetId`<sup>Optional</sup> <a name="widgetId" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetConfig.property.widgetId"></a>

```java
public java.lang.String getWidgetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#widget_id SqlWidget#widget_id}.

---

### SqlWidgetParameter <a name="SqlWidgetParameter" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidgetParameter;

SqlWidgetParameter.builder()
    .name(java.lang.String)
    .type(java.lang.String)
//  .mapTo(java.lang.String)
//  .title(java.lang.String)
//  .value(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#name SqlWidget#name}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#type SqlWidget#type}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.mapTo">mapTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#map_to SqlWidget#map_to}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#value SqlWidget#value}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#values SqlWidget#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#name SqlWidget#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#type SqlWidget#type}.

---

##### `mapTo`<sup>Optional</sup> <a name="mapTo" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.mapTo"></a>

```java
public java.lang.String getMapTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#map_to SqlWidget#map_to}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#value SqlWidget#value}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#values SqlWidget#values}.

---

### SqlWidgetPosition <a name="SqlWidgetPosition" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidgetPosition;

SqlWidgetPosition.builder()
    .sizeX(java.lang.Number)
    .sizeY(java.lang.Number)
//  .autoHeight(java.lang.Boolean|IResolvable)
//  .posX(java.lang.Number)
//  .posY(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeX">sizeX</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#size_x SqlWidget#size_x}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeY">sizeY</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#size_y SqlWidget#size_y}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition.property.autoHeight">autoHeight</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#auto_height SqlWidget#auto_height}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition.property.posX">posX</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#pos_x SqlWidget#pos_x}. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition.property.posY">posY</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#pos_y SqlWidget#pos_y}. |

---

##### `sizeX`<sup>Required</sup> <a name="sizeX" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeX"></a>

```java
public java.lang.Number getSizeX();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#size_x SqlWidget#size_x}.

---

##### `sizeY`<sup>Required</sup> <a name="sizeY" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeY"></a>

```java
public java.lang.Number getSizeY();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#size_y SqlWidget#size_y}.

---

##### `autoHeight`<sup>Optional</sup> <a name="autoHeight" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition.property.autoHeight"></a>

```java
public java.lang.Boolean|IResolvable getAutoHeight();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#auto_height SqlWidget#auto_height}.

---

##### `posX`<sup>Optional</sup> <a name="posX" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition.property.posX"></a>

```java
public java.lang.Number getPosX();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#pos_x SqlWidget#pos_x}.

---

##### `posY`<sup>Optional</sup> <a name="posY" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition.property.posY"></a>

```java
public java.lang.Number getPosY();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#pos_y SqlWidget#pos_y}.

---

### SqlWidgetProviderConfig <a name="SqlWidgetProviderConfig" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidgetProviderConfig;

SqlWidgetProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#workspace_id SqlWidget#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/sql_widget#workspace_id SqlWidget#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlWidgetParameterList <a name="SqlWidgetParameterList" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidgetParameterList;

new SqlWidgetParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.get"></a>

```java
public SqlWidgetParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SqlWidgetParameter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>>

---


### SqlWidgetParameterOutputReference <a name="SqlWidgetParameterOutputReference" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidgetParameterOutputReference;

new SqlWidgetParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetMapTo">resetMapTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMapTo` <a name="resetMapTo" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetMapTo"></a>

```java
public void resetMapTo()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapToInput">mapToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapTo">mapTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mapToInput`<sup>Optional</sup> <a name="mapToInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapToInput"></a>

```java
public java.lang.String getMapToInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mapTo`<sup>Required</sup> <a name="mapTo" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapTo"></a>

```java
public java.lang.String getMapTo();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.internalValue"></a>

```java
public IResolvable|SqlWidgetParameter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetParameter">SqlWidgetParameter</a>

---


### SqlWidgetPositionOutputReference <a name="SqlWidgetPositionOutputReference" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidgetPositionOutputReference;

new SqlWidgetPositionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetAutoHeight">resetAutoHeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosX">resetPosX</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosY">resetPosY</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoHeight` <a name="resetAutoHeight" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetAutoHeight"></a>

```java
public void resetAutoHeight()
```

##### `resetPosX` <a name="resetPosX" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosX"></a>

```java
public void resetPosX()
```

##### `resetPosY` <a name="resetPosY" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosY"></a>

```java
public void resetPosY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeightInput">autoHeightInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posXInput">posXInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posYInput">posYInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeXInput">sizeXInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeYInput">sizeYInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeight">autoHeight</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posX">posX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posY">posY</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeX">sizeX</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeY">sizeY</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoHeightInput`<sup>Optional</sup> <a name="autoHeightInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeightInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoHeightInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `posXInput`<sup>Optional</sup> <a name="posXInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posXInput"></a>

```java
public java.lang.Number getPosXInput();
```

- *Type:* java.lang.Number

---

##### `posYInput`<sup>Optional</sup> <a name="posYInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posYInput"></a>

```java
public java.lang.Number getPosYInput();
```

- *Type:* java.lang.Number

---

##### `sizeXInput`<sup>Optional</sup> <a name="sizeXInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeXInput"></a>

```java
public java.lang.Number getSizeXInput();
```

- *Type:* java.lang.Number

---

##### `sizeYInput`<sup>Optional</sup> <a name="sizeYInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeYInput"></a>

```java
public java.lang.Number getSizeYInput();
```

- *Type:* java.lang.Number

---

##### `autoHeight`<sup>Required</sup> <a name="autoHeight" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeight"></a>

```java
public java.lang.Boolean|IResolvable getAutoHeight();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `posX`<sup>Required</sup> <a name="posX" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posX"></a>

```java
public java.lang.Number getPosX();
```

- *Type:* java.lang.Number

---

##### `posY`<sup>Required</sup> <a name="posY" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posY"></a>

```java
public java.lang.Number getPosY();
```

- *Type:* java.lang.Number

---

##### `sizeX`<sup>Required</sup> <a name="sizeX" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeX"></a>

```java
public java.lang.Number getSizeX();
```

- *Type:* java.lang.Number

---

##### `sizeY`<sup>Required</sup> <a name="sizeY" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeY"></a>

```java
public java.lang.Number getSizeY();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.internalValue"></a>

```java
public SqlWidgetPosition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---


### SqlWidgetProviderConfigOutputReference <a name="SqlWidgetProviderConfigOutputReference" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.databricks.sql_widget.SqlWidgetProviderConfigOutputReference;

new SqlWidgetProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig">SqlWidgetProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfigOutputReference.property.internalValue"></a>

```java
public SqlWidgetProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlWidget.SqlWidgetProviderConfig">SqlWidgetProviderConfig</a>

---



